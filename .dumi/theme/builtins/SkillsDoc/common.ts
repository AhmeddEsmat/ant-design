export interface SkillsDocLocale {
  downloadButton: string;
  githubButton: string;
  downloadNotePrefix: string;
  downloadNoteSuffix: string;
  component: string;
  description: string;
  copyCommand: string;
}

export interface SkillsDocLocales {
  cn: SkillsDocLocale;
  en: SkillsDocLocale;
}

export interface ComponentSkill {
  name: string;
  description: {
    cn: string;
    en: string;
  };
}

export const skillsDocLocales: SkillsDocLocales = {
  cn: {
    downloadButton: '下载 .skills',
    githubButton: 'GitHub',
    downloadNotePrefix: '下载为仓库压缩包，请解压后获取 ',
    downloadNoteSuffix: ' 目录。',
    component: '组件',
    description: '简介',
    copyCommand: '复制命令',
  },
  en: {
    downloadButton: 'Download .skills',
    githubButton: 'GitHub',
    downloadNotePrefix: 'Download provides the repository zip. Extract ',
    downloadNoteSuffix: ' after downloading.',
    component: 'Component',
    description: 'Description',
    copyCommand: 'Copy command',
  },
};

export const componentSkills: ComponentSkill[] = [
  {
    name: 'Affix',
    description: { cn: '滚动时固定元素位置', en: 'Fix elements to the viewport on scroll' },
  },
  { name: 'Alert', description: { cn: '展示重要提示信息', en: 'Show important alert messages' } },
  { name: 'Anchor', description: { cn: '站内锚点导航', en: 'In-page anchor navigation' } },
  {
    name: 'App',
    description: { cn: '应用容器，管理全局弹层', en: 'Application container for global layers' },
  },
  {
    name: 'AutoComplete',
    description: { cn: '输入时提供自动补全建议', en: 'Suggest options as you type' },
  },
  { name: 'Avatar', description: { cn: '头像展示', en: 'Avatar for users or entities' } },
  { name: 'Badge', description: { cn: '徽标计数或状态点', en: 'Status or count badge' } },
  { name: 'Breadcrumb', description: { cn: '面包屑导航', en: 'Breadcrumb navigation' } },
  { name: 'Button', description: { cn: '触发操作', en: 'Trigger actions' } },
  { name: 'Calendar', description: { cn: '日历展示', en: 'Calendar view' } },
  { name: 'Card', description: { cn: '卡片容器', en: 'Content card container' } },
  { name: 'Carousel', description: { cn: '轮播展示', en: 'Carousel for content or images' } },
  { name: 'Cascader', description: { cn: '级联选择', en: 'Cascading selection' } },
  { name: 'Checkbox', description: { cn: '多选框', en: 'Multiple selection' } },
  { name: 'Collapse', description: { cn: '折叠面板', en: 'Expandable panels' } },
  { name: 'ColorPicker', description: { cn: '颜色选择', en: 'Color selection' } },
  {
    name: 'ConfigProvider',
    description: { cn: '全局配置与主题提供', en: 'Global configuration and theme provider' },
  },
  { name: 'DatePicker', description: { cn: '日期选择', en: 'Date selection' } },
  { name: 'Descriptions', description: { cn: '描述列表展示', en: 'Description list display' } },
  { name: 'Divider', description: { cn: '分割线', en: 'Content divider' } },
  { name: 'Drawer', description: { cn: '抽屉面板', en: 'Sliding drawer panel' } },
  { name: 'Dropdown', description: { cn: '下拉菜单', en: 'Dropdown menu' } },
  { name: 'Empty', description: { cn: '空状态占位', en: 'Empty state placeholder' } },
  { name: 'Flex', description: { cn: 'Flex 布局容器', en: 'Flexbox layout container' } },
  { name: 'FloatButton', description: { cn: '悬浮操作按钮', en: 'Floating action button' } },
  { name: 'Form', description: { cn: '表单容器与校验', en: 'Form container with validation' } },
  {
    name: 'Grid',
    description: { cn: '24 栅格布局（Row/Col）', en: '24-column grid system (Row/Col)' },
  },
  { name: 'Icon', description: { cn: '图标展示', en: 'Icon display' } },
  { name: 'Image', description: { cn: '图片展示与预览', en: 'Image display and preview' } },
  { name: 'Input', description: { cn: '文本输入', en: 'Text input' } },
  { name: 'InputNumber', description: { cn: '数字输入', en: 'Numeric input' } },
  { name: 'Layout', description: { cn: '页面布局结构', en: 'Page layout structure' } },
  { name: 'List', description: { cn: '列表展示', en: 'List display' } },
  { name: 'Mentions', description: { cn: '@ 提及输入', en: 'Mention input' } },
  { name: 'Menu', description: { cn: '导航菜单', en: 'Navigation menu' } },
  { name: 'Message', description: { cn: '全局提示消息', en: 'Global message prompt' } },
  { name: 'Modal', description: { cn: '对话框', en: 'Modal dialog' } },
  { name: 'Notification', description: { cn: '全局通知', en: 'Global notification prompt' } },
  { name: 'Pagination', description: { cn: '分页器', en: 'Pagination control' } },
  { name: 'Popconfirm', description: { cn: '气泡确认', en: 'Confirmation popover' } },
  { name: 'Popover', description: { cn: '气泡卡片', en: 'Popover card' } },
  { name: 'Progress', description: { cn: '进度指示', en: 'Progress indicator' } },
  { name: 'QRCode', description: { cn: '二维码生成', en: 'QR code generator' } },
  { name: 'Radio', description: { cn: '单选按钮', en: 'Single selection' } },
  { name: 'Rate', description: { cn: '评分组件', en: 'Rating control' } },
  { name: 'Result', description: { cn: '结果反馈页', en: 'Result feedback page' } },
  { name: 'Segmented', description: { cn: '分段控制器', en: 'Segmented control' } },
  { name: 'Select', description: { cn: '选择器', en: 'Selection dropdown' } },
  { name: 'Skeleton', description: { cn: '骨架屏', en: 'Loading skeleton' } },
  { name: 'Slider', description: { cn: '滑动输入', en: 'Slider input' } },
  { name: 'Space', description: { cn: '元素间距', en: 'Spacing between elements' } },
  { name: 'Spin', description: { cn: '加载指示器', en: 'Loading spinner' } },
  { name: 'Splitter', description: { cn: '可调整分割面板', en: 'Resizable split panels' } },
  { name: 'Statistic', description: { cn: '统计数值展示', en: 'Statistic number display' } },
  { name: 'Steps', description: { cn: '步骤条', en: 'Step indicator' } },
  { name: 'Switch', description: { cn: '开关', en: 'Toggle switch' } },
  { name: 'Table', description: { cn: '数据表格', en: 'Data table' } },
  { name: 'Tabs', description: { cn: '标签页导航', en: 'Tab navigation' } },
  { name: 'Tag', description: { cn: '标签', en: 'Tag label' } },
  { name: 'Theme', description: { cn: '主题与 Token 配置', en: 'Theme tokens and algorithms' } },
  { name: 'TimePicker', description: { cn: '时间选择', en: 'Time selection' } },
  { name: 'Timeline', description: { cn: '时间轴', en: 'Timeline display' } },
  { name: 'Tooltip', description: { cn: '文字提示', en: 'Tooltip hint' } },
  { name: 'Tour', description: { cn: '功能引导', en: 'Feature tour' } },
  { name: 'Transfer', description: { cn: '穿梭框', en: 'Transfer items between lists' } },
  { name: 'Tree', description: { cn: '树形数据展示', en: 'Tree data display' } },
  { name: 'TreeSelect', description: { cn: '树选择', en: 'Select with tree data' } },
  { name: 'Typography', description: { cn: '排版文字', en: 'Typography text' } },
  { name: 'Upload', description: { cn: '文件上传', en: 'File upload' } },
  { name: 'Watermark', description: { cn: '水印覆盖', en: 'Watermark overlay' } },
];

export const githubRepoUrl = 'https://github.com/ant-design/ant-design';
export const skillsDownloadUrl =
  'https://github.com/ant-design/ant-design/archive/refs/heads/master.zip';
const rawBaseUrl =
  'https://raw.githubusercontent.com/ant-design/ant-design/master/.skills/components/references';

export const buildCopyCommand = (name: string) => `curl -L ${rawBaseUrl}/${name}.md | pbcopy`;
