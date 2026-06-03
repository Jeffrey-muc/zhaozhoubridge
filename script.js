const ancientData = [
  {
    name: "赵州桥",
    fullName: "赵州桥（安济桥）",
    era: "隋（595-605 年）",
    span: 37.02,
    length: 50.82,
    width: 9.0,
    rise: 7.23,
    ratio: 0.195,
    efficiency: 0.657,
    structure: "敞肩式（空腹式），28 道并列拱券，天然地基",
    color: "#a33f32"
  },
  {
    name: "寿昌桥",
    fullName: "寿昌桥",
    era: "南宋咸淳年间",
    span: 17.4,
    length: 32.85,
    width: 2.86,
    rise: 7.16,
    ratio: 0.412,
    efficiency: 0.489,
    structure: "单孔实腹弧形，11 节分节并列砌筑",
    color: "#b88a3d"
  },
  {
    name: "思本桥",
    fullName: "思本桥",
    era: "南宋宝祐年间",
    span: 9.0,
    length: 22.5,
    width: 1.85,
    rise: 4.5,
    ratio: 0.5,
    efficiency: 0.398,
    structure: "单孔半圆拱，7 道分节并列砌筑",
    color: "#647048",
    labelDx: -34,
    labelDy: -14
  },
  {
    name: "忠义桥",
    fullName: "忠义桥",
    era: "南宋嘉定十一年",
    span: 8.09,
    length: 16.24,
    width: 3.65,
    rise: 4.26,
    ratio: 0.527,
    efficiency: 0.421,
    structure: "单孔圆弧形，分节并列砌筑，拱脚榫卯连接桥台",
    color: "#2c7563",
    labelDx: 44,
    labelDy: 24
  }
];

const modernData = [
  { name: "赵州桥", type: "敞肩石拱桥", span: 37.02, ratio: 0.195, color: "#2c7563" },
  { name: "凤来大溪河", type: "上承式钢拱桥", span: 580, ratio: 0.2, color: "#a33f32" },
  { name: "龙河 A1", type: "下承式钢管混凝土拱桥", span: 125, ratio: 0.2, color: "#2f5d7c" },
  { name: "高速连续梁", type: "预应力混凝土连续梁", span: 40, ratio: 0.037, color: "#647048" },
  { name: "汉南长江", type: "双塔单跨悬索桥", span: 1600, ratio: 0.111, color: "#b88a3d" }
];

const shoreGuides = {
  mainland: {
    label: "大陆青年",
    tag: "从燕赵大地进入安济桥现场",
    lead: "把赵州桥看作一项跨越千年的工程创新：它在隋代完成大跨度、低矢高、敞肩泄洪和石料节约，像一份古代工程师写给今天的答案。",
    route: [
      { title: "看全景", detail: "先从沉浸式桥景进入现场，观察桥身、河道、岸线与倒影形成的整体空间关系。" },
      { title: "拆结构", detail: "继续点击主拱、敞肩、水脉等热点，理解赵州桥如何把通行、泄洪和减重放进同一个结构方案。" },
      { title: "读数据", detail: "通过跨度、高跨比、桥长和同类古桥对照，把“古代奇迹”转化为可以比较和说明的科学证据。" },
      { title: "讲传承", detail: "最后把工程智慧与青年责任联系起来，思考今天如何用数字技术保护、传播和活化传统建筑。" }
    ],
    color: "#a33f32"
  },
  hongkong: {
    label: "香港青年",
    tag: "从港湾、通行与城市连接理解桥",
    lead: "香港熟悉海港、道路与城市流动。赵州桥同样处理水、岸、交通和人群之间的关系，只是它用石拱完成了古代中国的通达方案。",
    route: [
      { title: "联想到港湾交通", detail: "从香港熟悉的海港、跨海通行和城市流动经验出发，理解桥梁首先是一种连接人与空间的基础设施。" },
      { title: "理解泄洪开孔", detail: "观察敞肩小拱如何扩大过水面积，让桥在洪水环境中保持稳定，感受古代工程对自然条件的回应。" },
      { title: "比较现代桥梁", detail: "再看现代桥梁与赵州桥的高跨比、跨度关系，理解材料不同但工程逻辑可以跨时代对话。" },
      { title: "形成共同文化记忆", detail: "把赵州桥从一处地域古迹转化为共同文化坐标，在交流中看见中华营造智慧的连续性。" }
    ],
    color: "#2f5d7c"
  },
  macau: {
    label: "澳门青年",
    tag: "从中西交汇城市看中华营造审美",
    lead: "澳门有多元文化交汇的城市经验。赵州桥的价值不只在功能，也在比例、桥影和栏板装饰形成的东方审美秩序。",
    route: [
      { title: "观察桥影", detail: "从桥身倒影和河面构图入手，感受赵州桥不是孤立建筑，而是桥、河、岸、影共同组成的景观。" },
      { title: "理解比例", detail: "通过低矢高长拱和舒展桥线，理解传统工程如何在实用功能之外形成含蓄、平衡的东方美感。" },
      { title: "识别纹样", detail: "进一步关注栏板、石材、拱券秩序等细节，看到古建筑中结构、装饰与文化符号的融合。" },
      { title: "连接城市记忆", detail: "结合澳门多元文化交汇的城市经验，理解赵州桥如何成为认识中华文化根脉的一座入口。" }
    ],
    color: "#b88a3d"
  },
  taiwan: {
    label: "台湾青年",
    tag: "从河流、山地与聚落交通理解古桥智慧",
    lead: "台湾青年熟悉河流、山地和聚落交通。赵州桥展示了古人如何顺应水文环境，把安全、通行和景观放进同一个工程方案。",
    route: [
      { title: "关注水文", detail: "从河流环境切入，理解赵州桥面对洪水、河床和交通需求时，为什么要采用敞肩石拱结构。" },
      { title: "理解受力", detail: "通过主拱连续受力、小拱分担自重的关系，认识古代石拱桥在材料受限条件下的高效设计。" },
      { title: "体验互动实验", detail: "拖动敞肩开孔滑块，观察过水能力、减重效果和视觉留白的变化，把抽象结构变成可感知体验。" },
      { title: "共学中华智慧", detail: "在互动中把地方经验与中华传统营造连接起来，形成两岸青年共同学习、互学互鉴的文化路径。" }
    ],
    color: "#2c7563"
  }
};

const heroStates = [
  {
    title: "四岸济元",
    text: "以赵州桥别名“安济桥”为文化线索，把 1400 多年前的敞肩石拱桥转译为可进入、可比较、可实验的数字元宇宙科普空间，让四岸青年在同一座桥里看见共同的中华营造智慧。"
  },
  {
    title: "安济通达",
    text: "“济”既是安济桥之名，也指渡河、相助与通达。作品用桥的意象连接大陆、香港、澳门、台湾四地青年，把古桥知识变成共同参与的学习路径。"
  },
  {
    title: "数字共学",
    text: "通过全景、热点、图表和结构实验，青年不只是看介绍，而是进入一个可以探索的数字场景：看桥、拆桥、比桥、讲桥。"
  }
];

const phraseToTraditional = [
  ["四岸济元", "四岸濟元"],
  ["赵州桥", "趙州橋"],
  ["安济桥", "安濟橋"],
  ["大陆", "大陸"],
  ["香港", "香港"],
  ["澳门", "澳門"],
  ["台湾", "臺灣"],
  ["数字元宇宙", "數字元宇宙"],
  ["数字科普", "數字科普"],
  ["数字导览", "數字導覽"],
  ["中华营造智慧", "中華營造智慧"],
  ["中华优秀传统文化", "中華優秀傳統文化"],
  ["中华瑰宝", "中華瑰寶"],
  ["两岸同胞", "兩岸同胞"],
  ["历史文化财富", "歷史文化財富"],
  ["中华传统文化", "中華傳統文化"],
  ["青年", "青年"],
  ["导览", "導覽"],
  ["导航", "導航"],
  ["简体中文", "簡體中文"],
  ["繁體中文", "繁體中文"],
  ["文字设置", "文字設定"],
  ["科学证据", "科學證據"],
  ["选题意义", "選題意義"],
  ["四岸入口", "四岸入口"],
  ["数据回溯", "數據回溯"],
  ["数据证据", "數據證據"],
  ["答辩", "答辯"],
  ["结构实验室", "結構實驗室"],
  ["敞肩结构", "敞肩結構"],
  ["敞肩小拱", "敞肩小拱"],
  ["主拱", "主拱"],
  ["高跨比", "高跨比"],
  ["桥梁", "橋樑"],
  ["桥", "橋"],
  ["古代", "古代"],
  ["现代", "現代"],
  ["沉浸式", "沉浸式"],
  ["可视化", "可視化"],
  ["比较", "比較"],
  ["选择", "選擇"],
  ["进入", "進入"],
  ["查看", "查看"],
  ["拖拽", "拖曳"],
  ["点击", "點擊"],
  ["切换", "切換"],
  ["显示", "顯示"],
  ["按钮", "按鈕"],
  ["设置", "設定"],
  ["连接", "連接"],
  ["共同", "共同"],
  ["文化", "文化"],
  ["工程", "工程"],
  ["创新", "創新"],
  ["应用", "應用"],
  ["开发", "開發"],
  ["历史", "歷史"],
  ["来源", "來源"],
  ["背景", "背景"],
  ["意义", "意義"],
  ["体验", "體驗"],
  ["可进入", "可進入"],
  ["可比较", "可比較"],
  ["可实验", "可實驗"],
  ["通达", "通達"],
  ["相助", "相助"],
  ["渡河", "渡河"],
  ["安民", "安民"],
  ["济水", "濟水"],
  ["通行", "通行"],
  ["水岸共生", "水岸共生"],
  ["安济主拱", "安濟主拱"],
  ["敞肩智慧", "敞肩智慧"],
  ["自动巡游", "自動巡遊"],
  ["拖拽查看", "拖曳查看"],
  ["过水能力", "過水能力"],
  ["减重效果", "減重效果"],
  ["视觉留白", "視覺留白"],
  ["开孔程度", "開孔程度"],
  ["主拱跨度", "主拱跨度"],
  ["桥身总长", "橋身總長"],
  ["核心结构特点", "核心結構特點"],
  ["心灵距离", "心靈距離"],
  ["青年责任", "青年責任"],
  ["朝代", "朝代"],
  ["桥名", "橋名"]
];

const charToTraditional = {
  "赵": "趙", "济": "濟", "桥": "橋", "台": "臺", "陆": "陸", "澳": "澳", "门": "門",
  "数": "數", "导": "導", "览": "覽", "简": "簡", "体": "體", "设": "設", "置": "置",
  "选": "選", "题": "題", "义": "義", "科": "科", "学": "學", "证": "證", "据": "據",
  "结": "結", "构": "構", "实": "實", "验": "驗", "现": "現", "视": "視", "较": "較",
  "择": "擇", "进": "進", "点": "點", "击": "擊", "换": "換", "显": "顯", "连": "連",
  "达": "達", "应": "應", "开": "開", "发": "發", "历": "歷", "史": "史", "来": "來",
  "源": "源", "验": "驗", "转": "轉", "译": "譯", "为": "為", "这": "這", "让": "讓",
  "见": "見", "华": "華", "传": "傳", "统": "統", "优": "優", "秀": "秀", "营": "營",
  "造": "造", "慧": "慧", "线": "線", "索": "索", "年": "年", "前": "前", "敞": "敞",
  "肩": "肩", "石": "石", "拱": "拱", "空": "空", "间": "間", "同": "同", "座": "座",
  "里": "裡", "看": "看", "青": "青", "文": "文", "化": "化", "根": "根", "脉": "脈",
  "从": "從", "出": "出", "清": "清", "楚": "楚", "共": "共", "享": "享", "名": "名",
  "也": "也", "有": "有", "渡": "渡", "河": "河", "相": "相", "助": "助", "意": "意",
  "不": "不", "只": "只", "介": "介", "绍": "紹", "古": "古", "迹": "蹟", "而": "而",
  "是": "是", "把": "把", "转": "轉", "化": "化", "参": "參", "与": "與", "场": "場",
  "景": "景", "面": "面", "向": "向", "对": "對", "象": "象", "明": "明", "确": "確",
  "用": "用", "语": "語", "言": "言", "解": "解", "释": "釋", "距": "距", "离": "離",
  "感": "感", "更": "更", "容": "容", "易": "易", "主": "主", "清": "清", "晰": "晰",
  "征": "徵", "途": "途", "径": "徑", "素": "素", "材": "材", "派": "派", "生": "生",
  "公": "公", "式": "式", "宽": "寬", "长": "長", "总": "總", "类": "類", "态": "態",
  "栏": "欄", "板": "板", "装": "裝", "饰": "飾", "秩": "秩", "序": "序", "边": "邊",
  "湾": "灣", "题": "題", "闭": "閉", "浏": "瀏", "览": "覽", "输": "輸", "入": "入",
  "点": "點", "取": "取", "复": "複", "轻": "輕", "冲": "衝", "击": "擊", "负": "負",
  "担": "擔", "图": "圖", "谱": "譜", "系": "系", "雷": "雷", "达": "達", "图": "圖",
  "轴": "軸", "排": "排", "序": "序", "柱": "柱", "状": "狀", "源": "源", "条": "條",
  "目": "目", "回": "回", "溯": "溯", "许": "許", "协": "協", "议": "議",
  "隋": "隋", "瑰": "瑰", "宝": "寶", "两": "兩", "胞": "胞", "财": "財", "富": "富",
  "然": "然", "唤": "喚", "起": "起", "强": "強", "烈": "烈", "鸣": "鳴", "拉": "拉",
  "近": "近", "彼": "彼", "此": "此", "心": "心", "灵": "靈", "保": "保", "护": "護",
  "活": "活", "筑": "築", "责": "責", "任": "任", "弘": "弘", "扬": "揚"
};

const tooltip = document.querySelector("#tooltip");
let heroIndex = 0;
let currentLocale = localStorage.getItem("sjy-locale") || "zh-Hans";

function svgEl(tag, attrs = {}) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function clearSvg(svg) {
  while (svg.firstChild) svg.removeChild(svg.firstChild);
}

function scaleLinear(domain, range) {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  return value => r0 + ((value - d0) / (d1 - d0)) * (r1 - r0);
}

function scaleLog(domain, range) {
  const [d0, d1] = domain.map(Math.log10);
  const [r0, r1] = range;
  return value => r0 + ((Math.log10(value) - d0) / (d1 - d0)) * (r1 - r0);
}

function showTip(event, html) {
  tooltip.innerHTML = html;
  tooltip.hidden = false;
  const pad = 16;
  const x = Math.min(event.clientX + 14, window.innerWidth - tooltip.offsetWidth - pad);
  const y = Math.min(event.clientY + 14, window.innerHeight - tooltip.offsetHeight - pad);
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}

function hideTip() {
  tooltip.hidden = true;
}

function toTraditional(text) {
  let next = text;
  phraseToTraditional
    .slice()
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([source, target]) => {
      next = next.split(source).join(target);
    });
  return [...next].map(char => charToTraditional[char] || char).join("");
}

function convertForLocale(text) {
  return currentLocale === "zh-Hant" ? toTraditional(text) : text;
}

function translateElementAttributes(element) {
  const attrs = ["aria-label", "data-tip", "data-label", "title", "alt", "placeholder"];
  attrs.forEach(attr => {
    if (!element.hasAttribute(attr)) return;
    element.__localeAttrs = element.__localeAttrs || {};
    if (!(attr in element.__localeAttrs)) {
      element.__localeAttrs[attr] = element.getAttribute(attr);
    }
    element.setAttribute(attr, convertForLocale(element.__localeAttrs[attr]));
  });
}

function applyLocale(root = document.body) {
  if (!root) return;

  if (!document.__localeTitle) document.__localeTitle = document.title;
  document.title = convertForLocale(document.__localeTitle);

  if (root.nodeType === Node.ELEMENT_NODE) {
    translateElementAttributes(root);
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node => {
    if (node.__localeOriginal === undefined) node.__localeOriginal = node.nodeValue;
    node.nodeValue = convertForLocale(node.__localeOriginal);
  });

  root.querySelectorAll?.("*").forEach(translateElementAttributes);
  document.documentElement.lang = currentLocale === "zh-Hant" ? "zh-Hant" : "zh-CN";
}

function drawGrid(svg, xTicks, yTicks, xScale, yScale, plot) {
  xTicks.forEach(tick => {
    const x = xScale(tick);
    svg.appendChild(svgEl("line", { class: "grid-line", x1: x, y1: plot.top, x2: x, y2: plot.bottom }));
    svg.appendChild(svgEl("text", { class: "tick-label", x, y: plot.bottom + 25, "text-anchor": "middle" })).textContent = tick;
  });
  yTicks.forEach(tick => {
    const y = yScale(tick);
    svg.appendChild(svgEl("line", { class: "grid-line", x1: plot.left, y1: y, x2: plot.right, y2: y }));
    svg.appendChild(svgEl("text", { class: "tick-label", x: plot.left - 12, y: y + 4, "text-anchor": "end" })).textContent = tick.toFixed(3);
  });
}

function addAxisLabels(svg, plot, xLabel, yLabel) {
  svg.appendChild(svgEl("text", {
    class: "tick-label",
    x: (plot.left + plot.right) / 2,
    y: plot.bottom + 58,
    "text-anchor": "middle"
  })).textContent = xLabel;
  const y = svgEl("text", {
    class: "tick-label",
    x: 22,
    y: (plot.top + plot.bottom) / 2,
    transform: `rotate(-90 22 ${(plot.top + plot.bottom) / 2})`,
    "text-anchor": "middle"
  });
  y.textContent = yLabel;
  svg.appendChild(y);
}

function drawAncientScatter() {
  const svg = document.querySelector("#ancientScatter");
  if (!svg) return;
  clearSvg(svg);
  const plot = { left: 74, right: 650, top: 54, bottom: 342 };
  const x = scaleLinear([5, 41], [plot.left, plot.right]);
  const y = scaleLinear([0.18, 0.56], [plot.bottom, plot.top]);

  drawGrid(svg, [10, 20, 30, 40], [0.2, 0.3, 0.4, 0.5], x, y, plot);
  addAxisLabels(svg, plot, "主拱跨度（m）", "高跨比");

  ancientData.forEach(item => {
    const radius = 8 + item.width * 2.2;
    const circle = svgEl("circle", {
      class: "dot",
      cx: x(item.span),
      cy: y(item.ratio),
      r: radius,
      fill: item.color,
      opacity: ".88"
    });
    const tip = `<b>${item.fullName}</b><br>主拱跨度 ${item.span} m<br>高跨比 ${item.ratio}<br>${item.structure}`;
    circle.addEventListener("mouseenter", evt => showTip(evt, tip));
    circle.addEventListener("mousemove", evt => showTip(evt, tip));
    circle.addEventListener("mouseleave", hideTip);
    svg.appendChild(circle);

    const label = svgEl("text", {
      class: "chart-label",
      x: x(item.span) + (item.labelDx || 0),
      y: y(item.ratio) - radius - 8 + (item.labelDy || 0),
      "text-anchor": "middle"
    });
    label.textContent = item.name;
    svg.appendChild(label);
  });
}

function drawRadar(compareName = "寿昌桥") {
  const svg = document.querySelector("#radarChart");
  if (!svg) return;
  clearSvg(svg);
  const zhao = ancientData[0];
  const compare = ancientData.find(item => item.name === compareName) || ancientData[1];
  const heading = document.querySelector("#radarHeading");
  if (heading) heading.textContent = `结构指标雷达：赵州桥 vs ${compare.name}`;

  const metrics = [
    { key: "span", label: "主拱" },
    { key: "length", label: "桥长" },
    { key: "width", label: "桥宽" },
    { key: "efficiency", label: "综合" },
    { key: "ratio", label: "低矢高", invert: true }
  ];
  const max = {};
  metrics.forEach(metric => {
    max[metric.key] = Math.max(...ancientData.map(item => item[metric.key]));
  });
  const center = { x: 270, y: 214 };
  const radius = 145;

  [0.25, 0.5, 0.75, 1].forEach(level => {
    const pts = metrics.map((_, i) => {
      const angle = -Math.PI / 2 + i * Math.PI * 2 / metrics.length;
      return `${center.x + Math.cos(angle) * radius * level},${center.y + Math.sin(angle) * radius * level}`;
    }).join(" ");
    svg.appendChild(svgEl("polygon", { points: pts, fill: "none", stroke: "rgba(81,72,61,.2)" }));
  });

  metrics.forEach((metric, i) => {
    const angle = -Math.PI / 2 + i * Math.PI * 2 / metrics.length;
    svg.appendChild(svgEl("line", {
      x1: center.x,
      y1: center.y,
      x2: center.x + Math.cos(angle) * radius,
      y2: center.y + Math.sin(angle) * radius,
      stroke: "rgba(81,72,61,.22)"
    }));
    const label = svgEl("text", {
      class: "chart-label",
      x: center.x + Math.cos(angle) * (radius + 30),
      y: center.y + Math.sin(angle) * (radius + 30) + 4,
      "text-anchor": "middle"
    });
    label.textContent = metric.label;
    svg.appendChild(label);
  });

  function pointsFor(item) {
    return metrics.map((metric, i) => {
      let value = item[metric.key] / max[metric.key];
      if (metric.invert) value = 1 - value;
      const angle = -Math.PI / 2 + i * Math.PI * 2 / metrics.length;
      return [center.x + Math.cos(angle) * radius * value, center.y + Math.sin(angle) * radius * value];
    });
  }

  [
    { item: compare, color: "#2f5d7c", opacity: ".16" },
    { item: zhao, color: "#a33f32", opacity: ".22" }
  ].forEach(series => {
    const points = pointsFor(series.item);
    const polygon = svgEl("polygon", {
      class: "radar-shape",
      points: points.map(point => point.join(",")).join(" "),
      fill: series.color,
      opacity: series.opacity,
      stroke: series.color,
      "stroke-width": "3"
    });
    polygon.addEventListener("mouseenter", evt => showTip(evt, `<b>${series.item.name}</b><br>综合指数 ${series.item.efficiency.toFixed(3)}<br>高跨比 ${series.item.ratio}`));
    polygon.addEventListener("mousemove", evt => showTip(evt, `<b>${series.item.name}</b><br>综合指数 ${series.item.efficiency.toFixed(3)}<br>高跨比 ${series.item.ratio}`));
    polygon.addEventListener("mouseleave", hideTip);
    svg.appendChild(polygon);
  });

  const legend = svgEl("g", { class: "legend" });
  [["#a33f32", "赵州桥"], ["#2f5d7c", compare.name]].forEach(([color, label], index) => {
    legend.appendChild(svgEl("rect", { x: 170 + index * 95, y: 386, width: 12, height: 12, fill: color }));
    const text = svgEl("text", { x: 188 + index * 95, y: 397 });
    text.textContent = label;
    legend.appendChild(text);
  });
  svg.appendChild(legend);
}

function drawModernScatter() {
  const svg = document.querySelector("#modernScatter");
  if (!svg) return;
  clearSvg(svg);
  const plot = { left: 78, right: 648, top: 58, bottom: 328 };
  const x = scaleLog([30, 1800], [plot.left, plot.right]);
  const y = scaleLinear([0.02, 0.22], [plot.bottom, plot.top]);
  drawGrid(svg, [40, 100, 500, 1600], [0.05, 0.1, 0.15, 0.2], x, y, plot);
  addAxisLabels(svg, plot, "跨度（m，对数轴）", "高跨比");

  modernData.forEach(item => {
    const r = Math.max(7, Math.min(26, 7 + Math.sqrt(item.span) / 2.2));
    const dot = svgEl("circle", { class: "dot", cx: x(item.span), cy: y(item.ratio), r, fill: item.color, opacity: ".86" });
    const tip = `<b>${item.name}</b><br>${item.type}<br>跨度 ${item.span} m<br>高跨比 ${item.ratio}`;
    dot.addEventListener("mouseenter", evt => showTip(evt, tip));
    dot.addEventListener("mousemove", evt => showTip(evt, tip));
    dot.addEventListener("mouseleave", hideTip);
    svg.appendChild(dot);
    const label = svgEl("text", { class: "chart-label", x: x(item.span), y: y(item.ratio) - r - 8, "text-anchor": "middle" });
    label.textContent = item.name;
    svg.appendChild(label);
  });
}

function drawModernBar() {
  const svg = document.querySelector("#modernBar");
  if (!svg) return;
  clearSvg(svg);
  const sorted = [...modernData].sort((a, b) => b.ratio - a.ratio);
  const plot = { left: 62, right: 680, top: 54, bottom: 328 };
  const y = scaleLinear([0, 0.22], [plot.bottom, plot.top]);
  [0.05, 0.1, 0.15, 0.2].forEach(tick => {
    svg.appendChild(svgEl("line", { class: "grid-line", x1: plot.left, y1: y(tick), x2: plot.right, y2: y(tick) }));
    svg.appendChild(svgEl("text", { class: "tick-label", x: plot.left - 12, y: y(tick) + 4, "text-anchor": "end" })).textContent = tick.toFixed(2);
  });
  const gap = 18;
  const barW = (plot.right - plot.left - gap * (sorted.length - 1)) / sorted.length;
  sorted.forEach((item, index) => {
    const x = plot.left + index * (barW + gap);
    const h = plot.bottom - y(item.ratio);
    const bar = svgEl("rect", { class: "bar", x, y: y(item.ratio), width: barW, height: h, fill: item.color, rx: 4 });
    bar.addEventListener("mouseenter", evt => showTip(evt, `<b>${item.name}</b><br>${item.type}<br>高跨比 ${item.ratio}`));
    bar.addEventListener("mousemove", evt => showTip(evt, `<b>${item.name}</b><br>${item.type}<br>高跨比 ${item.ratio}`));
    bar.addEventListener("mouseleave", hideTip);
    svg.appendChild(bar);
    svg.appendChild(svgEl("text", { class: "chart-label", x: x + barW / 2, y: y(item.ratio) - 9, "text-anchor": "middle" })).textContent = item.ratio.toFixed(3);
    const label = svgEl("text", { class: "tick-label", x: x + barW / 2, y: plot.bottom + 28, "text-anchor": "middle" });
    label.textContent = item.name;
    svg.appendChild(label);
  });
}

function renderShoreCards(activeKey = "mainland") {
  const cards = document.querySelector("#shoreCards");
  if (!cards) return;
  cards.innerHTML = Object.entries(shoreGuides).map(([key, item], index) => `
    <button class="shore-card ${key === activeKey ? "is-active" : ""}" type="button" data-shore="${key}" style="--shore-color:${item.color}">
      <i>${String(index + 1).padStart(2, "0")}</i>
      <span>${item.label}</span>
      <b>${item.tag}</b>
      <em>进入导览</em>
    </button>
  `).join("");
  cards.querySelectorAll("[data-shore]").forEach(button => {
    button.addEventListener("click", () => {
      const key = button.dataset.shore;
      const select = document.querySelector("#shoreSelect");
      if (select) select.value = key;
      renderShoreCards(key);
      renderShorePanel(key);
    });
  });
  applyLocale(cards);
}

function renderShorePanel(key = "mainland") {
  const guide = shoreGuides[key] || shoreGuides.mainland;
  const panel = document.querySelector("#shorePanel");
  if (!panel) return;
  panel.style.setProperty("--shore-color", guide.color);
  panel.innerHTML = `
    <div class="shore-copy">
      <small>当前导览身份</small>
      <h3>${guide.label}</h3>
      <p>${guide.lead}</p>
      ${renderShoreEmblem(key)}
    </div>
    <ol class="shore-route">
      ${guide.route.map(step => `<li><strong>${step.title}</strong><span>${step.detail}</span></li>`).join("")}
    </ol>
  `;
  applyLocale(panel);
}

function renderShoreEmblem(key) {
  const emblemMap = {
    mainland: `
      <div class="shore-emblem emblem-mainland" aria-hidden="true">
        <img class="emblem-image" src="assets/emblems/mainland.jpg" alt="中华人民共和国国徽">
        <b>大陆青年</b>
      </div>
    `,
    hongkong: `
      <div class="shore-emblem emblem-hongkong" aria-hidden="true">
        <img class="emblem-image" src="assets/emblems/hongkong.jpg" alt="香港特别行政区区徽">
        <b>香港青年</b>
      </div>
    `,
    macau: `
      <div class="shore-emblem emblem-macau" aria-hidden="true">
        <img class="emblem-image" src="assets/emblems/macau.jpg" alt="澳门特别行政区区徽">
        <b>澳门青年</b>
      </div>
    `,
    taiwan: `
      <div class="shore-emblem emblem-taiwan" aria-hidden="true">
        <img class="emblem-image" src="assets/emblems/taiwan.jpg" alt="台湾导览标志">
        <b>台湾青年</b>
      </div>
    `
  };
  return emblemMap[key] || emblemMap.mainland;
}

function updateArchLab(value) {
  const openness = Number(value);
  const water = Math.round(48 + openness * 0.62);
  const weight = Math.round(42 + openness * 0.52);
  const beauty = Math.round(100 - Math.abs(openness - 70) * 0.46);
  const meters = [
    { id: "#waterScore", value: Math.min(water, 96) },
    { id: "#weightScore", value: Math.min(weight, 90) },
    { id: "#beautyScore", value: Math.max(beauty, 64) }
  ];
  meters.forEach(({ id, value }) => {
    const score = document.querySelector(id);
    if (!score) return;
    score.textContent = `${value}%`;
    score.closest(".lab-meter").style.setProperty("--meter", `${value}%`);
  });
  updateBridgeOpenings(openness);
}

function updateBridgeOpenings(openness) {
  const bridge = document.querySelector("#bridgeDiagram");
  if (!bridge) return;

  const scale = 0.62 + openness / 100 * 0.62;
  const openings = [
    { selector: "[data-opening='large-left']", center: 196, baseY: 198, width: 100, height: 66 },
    { selector: "[data-opening='large-right']", center: 704, baseY: 198, width: 100, height: 66 },
    { selector: "[data-opening='small-left']", center: 289, baseY: 189, width: 86, height: 50 },
    { selector: "[data-opening='small-right']", center: 611, baseY: 189, width: 86, height: 50 }
  ];

  openings.forEach(opening => {
    const path = bridge.querySelector(opening.selector);
    if (!path) return;
    const width = opening.width * scale;
    const height = opening.height * scale;
    const x1 = opening.center - width / 2;
    const x2 = opening.center + width / 2;
    const apexY = opening.baseY - height;
    path.setAttribute("d", `M${x1.toFixed(1)} ${opening.baseY} Q${opening.center} ${apexY.toFixed(1)} ${x2.toFixed(1)} ${opening.baseY}Z`);
  });
}

function fillEvidenceTable() {
  const tbody = document.querySelector("#dataRows");
  if (!tbody) return;
  tbody.innerHTML = ancientData.map(item => `
    <tr>
      <td>${item.fullName}</td>
      <td>${item.era}</td>
      <td>${item.span.toFixed(2)} m</td>
      <td>${item.length.toFixed(2)} m</td>
      <td>${item.ratio.toFixed(3)}</td>
      <td>${item.structure}</td>
    </tr>
  `).join("");
  applyLocale(tbody);
}

function createWelcomeBanner() {
  const mount = document.querySelector("#welcomeMount");
  if (!mount) return;
  const banner = document.createElement("div");
  banner.className = "welcome-banner";
  const hasHero = Boolean(document.querySelector("#panoramaView"));
  const message = hasHero
    ? "拖拽首屏全景、选择四岸身份、滑动结构实验，查看赵州桥如何被转译成数字科普体验。"
    : "当前内容已拆分为独立页面，可通过左侧导航快速切换板块，并使用简繁设置优化阅读。";
  banner.innerHTML = `<span><strong>欢迎进入《四岸济元》</strong>：${message}</span><button type="button">收起</button>`;
  mount.appendChild(banner);
  const close = () => {
    banner.classList.add("is-hidden");
    window.setTimeout(() => banner.remove(), 420);
  };
  banner.querySelector("button").addEventListener("click", close);
  window.setTimeout(() => {
    if (banner.isConnected) close();
  }, 6200);
}

function setupHeroClick() {
  const title = document.querySelector("#heroTitle");
  const text = document.querySelector("#heroText");
  if (!title || !text) return;
  const change = () => {
    heroIndex = (heroIndex + 1) % heroStates.length;
    title.style.opacity = "0";
    text.style.opacity = "0";
    window.setTimeout(() => {
      title.textContent = heroStates[heroIndex].title;
      text.textContent = heroStates[heroIndex].text;
      title.style.opacity = "1";
      text.style.opacity = "1";
    }, 180);
  };
  title.addEventListener("click", change);
  title.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") change();
  });
}

function setupPanorama() {
  const view = document.querySelector("#panoramaView");
  const angleLabel = document.querySelector("#panoramaAngle");
  if (!view || !angleLabel) return;

  let angle = 0;
  let dragging = false;
  let paused = false;
  let startX = 0;
  let startAngle = 0;
  let lastFrame = performance.now();

  function normalize(value) {
    const next = value % 720;
    return next < 0 ? next + 720 : next;
  }

  function render() {
    const offset = -angle * Math.max(1.6, view.clientWidth / 560);
    view.style.setProperty("--pan-x", `${offset}px`);
    angleLabel.textContent = dragging ? "拖拽查看" : "自动巡游";
  }

  function animate(now) {
    const delta = now - lastFrame;
    lastFrame = now;
    if (!dragging && !paused) {
      angle = normalize(angle + delta * 0.012);
      render();
    }
    requestAnimationFrame(animate);
  }

  view.addEventListener("pointerdown", event => {
    if (event.target.closest(".hero-copy")) return;
    dragging = true;
    startX = event.clientX;
    startAngle = angle;
    view.classList.add("is-dragging");
    view.setPointerCapture(event.pointerId);
  });

  view.addEventListener("pointermove", event => {
    if (!dragging) return;
    const delta = event.clientX - startX;
    angle = normalize(startAngle - delta * 0.9);
    render();
  });

  const stopDragging = event => {
    if (!dragging) return;
    dragging = false;
    view.classList.remove("is-dragging");
    if (event.pointerId !== undefined && view.hasPointerCapture(event.pointerId)) {
      view.releasePointerCapture(event.pointerId);
    }
  };

  view.addEventListener("pointerup", stopDragging);
  view.addEventListener("pointercancel", stopDragging);
  view.addEventListener("mouseenter", () => {
    paused = true;
  });
  view.addEventListener("mouseleave", event => {
    paused = false;
    stopDragging(event);
  });

  document.querySelectorAll(".ar-hotspot").forEach(hotspot => {
    hotspot.addEventListener("mouseenter", event => showTip(event, hotspot.dataset.tip));
    hotspot.addEventListener("mousemove", event => showTip(event, hotspot.dataset.tip));
    hotspot.addEventListener("mouseleave", hideTip);
  });

  render();
  requestAnimationFrame(animate);
}

function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelectorAll(".nav-links a");
  const scrim = document.querySelector("[data-close-nav]");
  if (!toggle || !scrim) return;
  const close = () => {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", () => {
    const open = !document.body.classList.contains("nav-open");
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.forEach(link => link.addEventListener("click", close));
  scrim.addEventListener("click", close);

  if (![...links].some(link => link.getAttribute("href")?.startsWith("#"))) {
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
  document.querySelectorAll(".chapter").forEach(section => observer.observe(section));
}

function setupDiagramHover() {
  document.querySelectorAll(".bridge-part").forEach(part => {
    part.addEventListener("mouseenter", event => showTip(event, part.dataset.label));
    part.addEventListener("mousemove", event => showTip(event, part.dataset.label));
    part.addEventListener("mouseleave", hideTip);
  });
}

function setupInteractiveControls() {
  const select = document.querySelector("#shoreSelect");
  if (select) {
    select.addEventListener("change", event => {
      renderShoreCards(event.target.value);
      renderShorePanel(event.target.value);
    });
  }

  const compareSelect = document.querySelector("#compareSelect");
  if (compareSelect) {
    compareSelect.addEventListener("change", event => drawRadar(event.target.value));
  }

  const slider = document.querySelector("#archSlider");
  if (slider) {
    slider.addEventListener("input", event => updateArchLab(event.target.value));
    updateArchLab(slider.value);
  }
}

function setupLanguageToggle() {
  const select = document.querySelector("#scriptSelect");
  if (!select) return;
  select.value = currentLocale;
  select.addEventListener("change", event => {
    currentLocale = event.target.value;
    localStorage.setItem("sjy-locale", currentLocale);
    applyLocale(document.body);
  });
}

function setupRevealAnimations() {
  const targets = document.querySelectorAll(".chapter, .kpi-card, .insight-card, .shore-card, .chart-card, .structure-card, .arch-lab, .feature-card, .table-wrap, .page-card, .page-next");
  targets.forEach((target, index) => {
    target.classList.add("reveal");
    target.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  targets.forEach(target => observer.observe(target));
}

function setupKpiCounters() {
  const counters = [...document.querySelectorAll(".kpi-card strong")].filter(node => /\d/.test(node.textContent));
  const originalText = new Map(counters.map(node => [node, node.textContent]));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      const text = originalText.get(node);
      const match = text.match(/(\d+(?:\.\d+)?)/);
      if (!match) return;
      const target = Number(match[1]);
      const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
      const start = performance.now();
      const duration = 900;
      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = (target * eased).toFixed(decimals);
        node.textContent = text.replace(match[1], value);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(node);
    });
  }, { threshold: 0.8 });
  counters.forEach(node => observer.observe(node));
}

function setupScrollProgress() {
  const bar = document.querySelector("#scrollProgress");
  if (!bar) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.setProperty("--scroll-progress", `${Math.min(100, Math.max(0, progress))}%`);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function redrawAll() {
  drawAncientScatter();
  drawRadar(document.querySelector("#compareSelect")?.value || "寿昌桥");
  drawModernScatter();
  drawModernBar();
  applyLocale(document.body);
}

document.addEventListener("DOMContentLoaded", () => {
  createWelcomeBanner();
  setupHeroClick();
  setupPanorama();
  setupMobileNav();
  setupDiagramHover();
  renderShoreCards("mainland");
  renderShorePanel("mainland");
  setupInteractiveControls();
  setupLanguageToggle();
  setupRevealAnimations();
  setupKpiCounters();
  setupScrollProgress();
  fillEvidenceTable();
  redrawAll();
});
