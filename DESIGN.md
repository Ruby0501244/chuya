---
name: "初芽"
description: "雾白水彩纸面中的四季内在空间，唯星空进入深蓝夜色。"
colors:
  mist-paper: "#F3F7F8"
  mist-paper-high: "#F9FBFB"
  ice-wash: "#EEF4F6"
  ice-depth: "#DDE8ED"
  card-glass: "rgba(255,255,255,.34)"
  card-glass-hover: "rgba(255,255,255,.52)"
  line-cool: "rgba(65,88,105,.12)"
  line-active: "rgba(119,145,159,.42)"
  ink-primary: "#283B49"
  ink-secondary: "#566B79"
  ink-muted: "#7C8D98"
  warm-light: "#9C875D"
  petal-muted: "#B58F98"
  violet-muted: "#9188AA"
  leaf-muted: "#829B86"
  ice-accent: "#7894A7"
  night: "#11182B"
  night-soft: "#171F35"
  night-deep: "#0D1324"
  night-text: "#F2F3F1"
  night-text-secondary: "#C6CDD5"
  night-text-muted: "#8F99A8"
  night-warm-light: "#D7BE82"
typography:
  display:
    fontFamily: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: ".02em"
  headline:
    fontFamily: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: ".02em"
  title:
    fontFamily: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: ".08em"
  body:
    fontFamily: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: "normal"
  label:
    fontFamily: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: ".02em"
rounded:
  control: "14px"
  card: "18px"
  action-dock: "22px"
  feature-card: "24px"
  modal: "26px"
  pill: "999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "24px"
  6: "32px"
  7: "40px"
  8: "48px"
components:
  button-primary:
    backgroundColor: "rgba(231,237,237,.72)"
    textColor: "#405B6C"
    typography: "{typography.body}"
    rounded: "{rounded.card}"
    padding: "10px 16px"
    height: "52px"
  button-secondary:
    backgroundColor: "rgba(255,255,255,.24)"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.card}"
    padding: "10px 16px"
    height: "52px"
  field:
    backgroundColor: "rgba(255,255,255,.32)"
    textColor: "{colors.ink-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "16px"
  card-glass:
    backgroundColor: "{colors.card-glass}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.card}"
    padding: "20px"
  nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
    height: "50px"
---

# Design System: 初芽

## Overview

**Creative North Star: "雾白内在庭院"**

初芽的视觉世界像一页被晨雾浸润的水彩纸：安静、柔软、留有呼吸，不把自我觉察包装成进度竞赛。普通页面保持雾白与冰蓝的低对比纸面，四季颜色只作为轻微环境晕染；只有进入“我的星空”时，空间才切换为独立的深蓝夜色。

完整的四季主树是稳定自我的视觉锚点。它随季节改变叶量、花朵与色彩，却不随记录数量生长或退化；树上的八颗暖白光属于树本身，表达持续存在的内在生命感。用户记录生成的数据星只进入专用星空层，绝不附着到首页主树上。

**Key Characteristics:**

- 雾白、冰蓝、低饱和水彩纸面。
- 普通页面为浅色空间，星空页为独立深蓝空间。
- 四季完整主树、固定骨架、固定八颗内在光点。
- 克制的玻璃感、细线分隔与柔和环境阴影。
- 手机优先的单列布局，首页主树随视口高度响应。
- 轻、慢、可被减少动效设置完整关闭的过渡。

## Colors

色彩以冷静的雾白和灰蓝为底，叶绿、花粉、紫灰与暖金只作为低饱和提示；深蓝仅属于星空层。

### Primary

- **冰雾纸面：** 普通页面的主背景与渐变中段，提供明亮但不刺眼的阅读底色。
- **灰蓝墨色：** 标题、正文和辅助文字以三级灰蓝建立层级，避免纯黑造成的压力感。
- **雾蓝强调：** 用于线性图标、活动导航、筛选状态与输入焦点，是浅色空间的主要交互提示。

### Secondary

- **克制暖光：** 用于主要状态提示、树上内在光点和少量确认反馈；它必须稀少，不能变成大面积品牌底色。
- **叶影绿：** 用于身体感受与季节生命色，保持低饱和与半透明。
- **花瓣粉：** 用于温柔提醒和较脆弱的状态表达，不承担警报语义。
- **暮紫：** 用于暗星、次级选择与沉静情绪，与暖光形成克制区分。

### Neutral

- **半透明白卡：** 卡片、输入和悬浮控件使用轻透明白，让纸面与季节晕染仍可透出。
- **冷灰细线：** 边界只负责组织，不制造硬框；活动态略提高不透明度。
- **深蓝夜幕：** 星图容器使用夜色三层级与浅色文字，普通页面不得借用整屏夜色。

### Named Rules

**The Two Spaces Rule.** 普通页面永远属于雾白纸面；只有星空层可以切换为深蓝夜色。

**The Warm Light Rarity Rule.** 暖光只标记内在生命与重要反馈，不铺满按钮、卡片或大面积背景。

**The Low-Saturation Rule.** 四季色是薄薄的水彩晕染，不使用高饱和、霓虹或强烈互补色。

## Typography

**Display Font:** PingFang SC（回退至 Hiragino Sans GB、Microsoft YaHei、system-ui、sans-serif）  
**Body Font:** PingFang SC（同一回退栈）

**Character:** 全系统使用清晰、柔和的中文无衬线字体，不以书法感制造疗愈氛围。层级来自字号、字重、行距和灰蓝明度，整体保持克制而可读。

### Hierarchy

- **Display**（500，28px，1.35）：陪伴流程卡片标题与关键页面标题。
- **Headline**（500，26px，约 1.35）：星空、声音等一级页面标题。
- **Title**（500，24px，1.4）：首页核心提问；保留轻微字距以形成停顿感。
- **Body**（400，15px，1.9）：说明、引导与较长的陪伴文本，使用宽松行距降低认知压力。
- **Label**（400，13px，1.5）：按钮辅助文案、筛选、字段提示与元数据。

### Named Rules

**The Quiet Hierarchy Rule.** 不用极粗字重或极端字号制造层级；标题的上限是中等字重，正文依靠留白获得关注。

## Layout

应用是手机优先的单列空间，内容画布最大宽度为 480px，并完整适配 `safe-area-inset`。常规页面左右留白以 20px 为主，顶部为固定导航预留约 88px；内容卡片内部通常采用 16px 或 24px，节奏来自 4px 基准的间距尺度。

首页首屏采用“树—提问—四入口”的垂直叙事。主树宽度为 `min(82vw, 360px)`，纵横比固定为 1:1，最大高度为 42dvh；当视口高度低于 700px 时缩为 `min(68vw, 260px)` 且不超过 38dvh。方形树冠向左右舒展，树干较短、略厚，保持低重心。四个入口是 2×2 细线网格，不使用四张漂浮卡片。

陪伴流程底部操作区固定在安全区上方，以两列按钮维持连续操作。宽度低于 350px 时，页面水平留白降至 16px，底部操作区进一步贴近两侧；内容顺序和语义不重排。

**The Complete Tree Rule.** 首页、星空树和回看树始终渲染当季完整 PNG；记录数量不得改变树的阶段、尺寸或枝叶完整度。

## Elevation & Depth

系统以透明度、纸纹、季节色晕染和背景模糊表达层级，默认卡片保持无阴影。阴影只用于抽屉、模态层、提示条和首页主树的轻微环境投影；它们是空间提示，不是可点击性的装饰。

### Shadow Vocabulary

- **主树环境投影**（`drop-shadow(0 18px 25px rgba(89,110,124,.12))`）：把透明水彩树轻放在纸面上，不制造发光边缘。
- **浮层投影**（`0 24px 64px rgba(61,82,95,.15)`）：仅用于模态框和底部配置面板。
- **抽屉侧向投影**（`20px 0 48px rgba(52,72,85,.12)`）：强调导航从左侧进入的空间关系。
- **轻提示投影**（`0 14px 36px rgba(63,88,105,.12)`）：用于 toast 等短暂反馈。

**The Flat-by-Default Rule.** 卡片和控件静止时依靠半透明表面与细边界分层，不为每个容器添加阴影。

## Shapes

形状语言来自水彩纸上的柔和容器：输入与小控件使用 14px 圆角，常规卡片与主按钮使用 18px，流程卡片使用 24px，模态层使用 26px。底部操作坞使用 22px 包裹两枚 18px 按钮；提示词 chip 保持全圆角。首页四入口是有意的例外：直角、透明、以细线分组，避免首页看起来像控制面板。

图标使用细描边、圆端点和 18–20px 的紧凑尺寸。树资产保留透明背景、接近方形的完整舒展轮廓与柔化边缘，不加白色底板、粗轮廓或强饱和滤镜。

**The Soft Containers, Clear Structure Rule.** 圆角负责触感，细线负责结构；不得用厚重边框同时承担两者。

## Components

### Buttons

- **Shape:** 主操作使用柔和矩形（18px），最小高度 52px；圆形导航控件为 48×48px。
- **Primary:** 半透明冰白表面、雾蓝文字和冷灰蓝细边，保持安静的确认感。
- **Hover / Focus:** 触摸态轻微缩放至 0.985；键盘焦点使用清晰的双像素雾蓝轮廓或三像素柔焦环。
- **Secondary:** 更透明的白色表面与次级灰蓝文字，不与主操作争夺注意力。
- **Disabled:** 降低表面与文字对比，但保留轮廓和布局尺寸。

### Chips

- **Style:** 提示词 chip 使用全圆角、半透明白与冷灰细边；情绪和筛选 chip 使用 14–18px 圆角。
- **State:** 选中态只加入暖光、雾蓝或暮紫的低透明晕染，不能整块变成高饱和实色。

### Cards / Containers

- **Corner Style:** 常规卡片 18px，陪伴流程卡片 24px，模态层 26px。
- **Background:** 半透明白卡让底层纸纹与季节色仍然可见；星空层则使用极低透明白叠在深蓝上。
- **Shadow Strategy:** 静态卡片无阴影，浮层才使用环境阴影。
- **Border:** 1px 冷灰蓝半透明边界。
- **Internal Padding:** 紧凑卡片 16px，主要内容卡片 20–24px。

### Inputs / Fields

- **Style:** 半透明白底、1px 冷灰边、14px 圆角，正文输入字号 16px；长文本区通常使用 16px 内边距。
- **Focus:** 边界转为雾蓝，并增加 3px 低透明焦点环。
- **Placeholder / Disabled:** 使用静默灰蓝，不以过低透明度牺牲可读性。

### Navigation

左侧抽屉以高透明雾白玻璃面进入，宽度不超过 320px；项目名使用雾蓝，导航项最小高度 50px。活动项通过浅雾蓝底与主文字色确认，不使用粗竖条、实色胶囊或重阴影。菜单与季节设置按钮固定在顶部安全区内，均为 48px 圆形玻璃控件。

### Seasonal Main Tree

四季版本共享固定骨架、主要分枝、根部终点与八个星光节点，只改变叶量、花朵、落叶和低饱和季节色。八颗光是树的内在生命感，不是用户数据，也不参与记录计数。主树入场只允许一次 0.52s 的轻柔去模糊，不做摇摆、弹跳或持续呼吸。

### Star Layer

进入星空页时，应用表面切换到深蓝，文字同步切换为浅色。用户记录生成的光星与暗星只绘制在专用星图容器中；星图中的树仍是同一完整当季资产。背景星点使用缓慢、低幅度闪烁，数据星的暖金与暮紫光晕保持紧凑。

### Motion

页面进入采用 0.26s 的 6px 上移淡入，抽屉使用 0.28s 位移，表面昼夜转换使用 0.42s 背景过渡。树入场使用 0.52s 去模糊，背景星点周期为约 4–8s。所有动画必须响应 `prefers-reduced-motion: reduce`，缩短至近乎即时且只播放一次。

## Do's and Don'ts

### Do:

- **Do** 让所有普通页面保持雾白、冰蓝和浅色文字层级，只在专用星空层进入深蓝。
- **Do** 在首页上半部完整展示响应式当季主树，并保持四季之间同一树干骨架与八个固定光点。
- **Do** 把数据星限制在星空层；它们不得改变主树资产、树上八颗光或首页构图。
- **Do** 使用 4px 间距基准、20px 常规页边距、16–24px 卡片内边距和安全区适配。
- **Do** 为键盘用户保留可见焦点状态，并完整支持减少动效偏好。

### Don't:

- **Don't** 根据记录数量让树从幼苗成长、掉叶、缩小或变得不完整。
- **Don't** 把树上的八颗暖白光解释成记录、勋章、进度或可点击数据点。
- **Don't** 在首页或普通记录页铺设深蓝夜空、数据星群或持续闪烁的装饰。
- **Don't** 使用霓虹、高饱和色、写实树皮、机械对称枝条、厚重阴影或高对比纯黑文字。
- **Don't** 把首页四个入口改成四张浮起的卡片；保留透明底与细线分组。
