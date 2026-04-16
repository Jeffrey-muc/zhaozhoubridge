# 顶部屏蔽无关警告
import warnings
warnings.filterwarnings("ignore", message="missing ScriptRunContext", category=UserWarning)

# 依赖导入
import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import base64

# ---------------------- 背景图片处理 ----------------------
def get_base64_image(image_path):
    with open(image_path, "rb") as img_file:
        return base64.b64encode(img_file.read()).decode()

# 读取赵州桥背景图
try:
    bg_img_base64 = get_base64_image("zhaozhou_bridge.jpg")
    BG_IMG_URL = f"data:image/jpg;base64,{bg_img_base64}"
except FileNotFoundError:
    st.error("⚠️ 请确保目录下有 zhaozhou_bridge.jpg")
    BG_IMG_URL = ""

# ---------------------- 赛博全透明配色定义 ----------------------
TECH_CYAN = "#00F2FF"     # 科技青
TECH_ORANGE = "#FF9D00"   # 警示橙
TRANSPARENT = "rgba(0, 0, 0, 0)" # 全透明
GLASS_BORDER = "rgba(0, 242, 255, 0.4)" # 边框保持可见度
TEXT_MAIN = "#FFFFFF"     # 纯白文字以应对深色背景
PAGE_BG_COLOR = "#0a0f19" # 底层补色

# 十六进制转 RGBA 辅助函数，修复雷达图透明度报错
def hex_to_rgba(hex_color, alpha=0.1):
    hex_color = hex_color.lstrip('#')
    r, g, b = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))
    return f"rgba({r}, {g}, {b}, {alpha})"

# 数据加载
def load_data():
    data = {
        "桥梁名称": ["赵州桥", "宋代官式桥A", "宋代官式桥B", "宋代官式桥C"],
        "类型": ["赵州桥", "宋代官式", "宋代官式", "宋代官式"],
        "主跨跨度（米）": [37.02, 30, 32, 28],
        "高跨比": [0.196, 0.15, 0.16, 0.14],
        "矢跨比": [0.25, 0.2, 0.21, 0.19],
        "拱券厚度（米）": [1.03, 1.2, 1.15, 1.25],
        "桥面宽度（米）": [9.6, 8, 8.5, 7.5]
    }
    return pd.DataFrame(data)

def main():
    st.set_page_config(page_title="赵州桥数字分析系统", page_icon="🧬", layout="wide")

    # ---------------------- CSS：全透明科技感重构 ----------------------
    st.markdown(
        f"""
        <style>
        /* 1. 全局背景随动与亮度控制 */
        .stApp {{
            background-color: {PAGE_BG_COLOR};
            background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("{BG_IMG_URL}");
            background-size: 100% auto;
            background-position: center top; 
            background-attachment: scroll; 
            background-repeat: no-repeat;
        }}
        
        /* 2. 固定HUD层（扫描线） */
        .stApp::after {{
            content: " ";
            position: fixed;
            top: 0; left: 0; bottom: 0; right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.15) 50%), 
                        linear-gradient(90deg, rgba(0, 242, 255, 0.01), rgba(0, 0, 0, 0), rgba(0, 242, 255, 0.01));
            z-index: 999;
            background-size: 100% 4px, 3px 100%;
            pointer-events: none;
        }}

        /* 3. 全透明交互容器（所有文字框） */
        .tech-card {{
            background: {TRANSPARENT} !important; 
            border: 1px solid {GLASS_BORDER};
            border-left: 4px solid {TECH_CYAN};
            border-radius: 4px;
            padding: 20px;
            color: {TEXT_MAIN};
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
            margin-bottom: 15px;
            transition: all 0.3s ease;
            backdrop-filter: blur(2px); 
        }}
        
        .tech-card:hover {{
            transform: translateX(5px);
            border-color: {TECH_CYAN};
            box-shadow: 0 0 15px rgba(0, 242, 255, 0.2);
            background: rgba(0, 242, 255, 0.05) !important; 
        }}

        /* 标题发光样式 */
        h1, h2, h3 {{
            color: {TECH_CYAN} !important;
            font-family: 'Courier New', monospace;
            text-shadow: 0 0 10px rgba(0, 242, 255, 0.6);
        }}

        /* 侧边栏全透明化 */
        [data-testid="stSidebar"] {{
            background-color: rgba(0, 0, 0, 0.4) !important;
            backdrop-filter: blur(10px);
            border-right: 1px solid {GLASS_BORDER};
        }}

        /* 状态条全透明化 */
        .status-box {{
            text-align:center; 
            padding:10px; 
            border:1px solid {GLASS_BORDER}; 
            background: {TRANSPARENT}; 
            color: {TEXT_MAIN};
            text-shadow: 1px 1px 2px black;
        }}

        #MainMenu, footer, header {{visibility: hidden;}}
        </style>
        """,
        unsafe_allow_html=True
    )

    # ---------------------- 交互式侧边栏 ----------------------
    with st.sidebar:
        st.markdown(f"### 🛰️ 系统传感器")
        st.info("正在扫描赵州桥历史结构参数...")
        
        df = load_data()
        selected_song = st.selectbox("目标比对对象 [TARGET_ID]", df[df["类型"] == "宋代官式"]["桥梁名称"].tolist())
        
        st.markdown("---")
        scan_depth = st.slider("数据渲染精度", 0, 100, 85)
        st.write(f"当前稳定性指数: {scan_depth}%")

    # ---------------------- 主页面内容 ----------------------
    st.markdown(f"<h1><span style='color:{TECH_ORANGE}'>赵州桥</span> 与其他桥梁技术对比 </h1>", unsafe_allow_html=True)

    # 顶部状态条
    cols = st.columns(4)
    cols[0].markdown(f"<div class='status-box'>状态: <span style='color:{TECH_CYAN}'>在线</span></div>", unsafe_allow_html=True)
    cols[1].markdown(f"<div class='status-box'>坐标: <span style='color:{TECH_CYAN}'>37.74N 114.76E</span></div>", unsafe_allow_html=True)
    cols[2].markdown(f"<div class='status-box'>结构: <span style='color:{TECH_CYAN}'>敞肩石拱</span></div>", unsafe_allow_html=True)
    cols[3].markdown(f"<div class='status-box'>年代: <span style='color:{TECH_CYAN}'>隋代 AD595</span></div>", unsafe_allow_html=True)

    st.markdown("<br>", unsafe_allow_html=True)

    # 核心数据可视化
    c1, c2 = st.columns([1, 1])
    filtered_df = df[df["桥梁名称"].isin(["赵州桥", selected_song])]

    with c1:
        st.markdown(f"### 🌀 拓扑参数雷达分析")
        radar_cats = ["主跨跨度（米）", "高跨比", "矢跨比", "拱券厚度（米）", "桥面宽度（米）"]
        
        norm_df = filtered_df.copy()
        for cat in radar_cats:
            norm_df[cat] = filtered_df[cat] / df[cat].max()

        fig_radar = go.Figure()
        colors = [TECH_ORANGE, TECH_CYAN]
        for i, name in enumerate(["赵州桥", selected_song]):
            vals = [norm_df[norm_df["桥梁名称"]==name][cat].values[0] for cat in radar_cats]
            
            # 使用正确的转换函数处理填充色
            fill_rgba = hex_to_rgba(colors[i], 0.15)
            
            fig_radar.add_trace(go.Scatterpolar(
                r=vals + [vals[0]], theta=radar_cats + [radar_cats[0]],
                fill='toself', name=name,
                line=dict(color=colors[i], width=2),
                fillcolor=fill_rgba, # 应用正确的 RGBA 颜色
            ))

        fig_radar.update_layout(
            polar=dict(
                bgcolor="rgba(0,0,0,0)",
                radialaxis=dict(visible=True, gridcolor="rgba(0,242,255,0.2)", showticklabels=False),
                angularaxis=dict(gridcolor="rgba(0,242,255,0.2)", tickfont=dict(color=TECH_CYAN))
            ),
            paper_bgcolor="rgba(0,0,0,0)", plot_bgcolor="rgba(0,0,0,0)",
            legend=dict(font=dict(color=TEXT_MAIN), orientation="h", y=-0.2),
            margin=dict(t=20, b=20, l=40, r=40)
        )
        st.plotly_chart(fig_radar, use_container_width=True)

    with c2:
        st.markdown(f"### 📈 结构力学向量比对")
        fig_bar = px.bar(
            filtered_df, x="桥梁名称", y="主跨跨度（米）",
            color="桥梁名称",
            color_discrete_map={"赵州桥": TECH_ORANGE, selected_song: TECH_CYAN},
            text_auto=True
        )
        fig_bar.update_layout(
            paper_bgcolor="rgba(0,0,0,0)", 
            plot_bgcolor="rgba(255,255,255,0.05)", 
            font_color=TEXT_MAIN,
            xaxis=dict(gridcolor="rgba(0,242,255,0.1)"),
            yaxis=dict(gridcolor="rgba(0,242,255,0.1)"),
            showlegend=False,
            margin=dict(t=20, b=20, l=20, r=20)
        )
        st.plotly_chart(fig_bar, use_container_width=True)

    # 底部全透明解析块
    st.markdown("---")
    st.markdown("### 🛠️ 敞肩拱核心解析")
    h1, h2, h3 = st.columns(3)
    
    with h1:
        st.markdown(f"""<div class='tech-card'>
            <small style='color:{TECH_CYAN}; font-family: monospace;'>[01] 减轻自重</small>
            <h2 style='margin:10px 0; color:{TEXT_MAIN};'>-15.3%</h2>
            <p style='font-size:14px; color:{TEXT_MAIN};'>相比实拱肩，节省石料约26立方米，降低地基负荷。</p >
        </div>""", unsafe_allow_html=True)
    
    with h2:
        st.markdown(f"""<div class='tech-card'>
            <small style='color:{TECH_CYAN}; font-family: monospace;'>[02] 增加泄洪面积</small>
            <h2 style='margin:10px 0; color:{TEXT_MAIN};'>+16.5%</h2>
            <p style='font-size:14px; color:{TEXT_MAIN};'>四个小拱分流洪水，减少水流对桥梁的冲击。</p >
        </div>""", unsafe_allow_html=True)
        
    with h3:
        st.markdown(f"""<div class='tech-card'>
            <small style='color:{TECH_CYAN}; font-family: monospace;'>[03] 改善主拱受力</small>
            <h2 style='margin:10px 0; color:{TEXT_MAIN};'>均衡受力</h2>
            <p style='font-size:14px; color:{TEXT_MAIN};'>主拱桥受力更均匀，增强桥梁整体稳定性。</p >
        </div>""", unsafe_allow_html=True)

    # 脚注交互
    with st.expander("📡 查看系统日志 & 数据源协议"):
        st.code("""
        [SOURCE_01]: 茅以升《中国石拱桥研究》
        [SOURCE_02]: 潘谷西《宋营造法式解读》
        [SYSTEM_LOG]: 全透明渲染模式已激活。HUD层覆盖率100%。雷达图色彩引擎已修复。
        """, language="bash")

if __name__ == "__main__":
    main()
