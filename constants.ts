import { DevelopmentGoal, DesignStyle, DesignPriority } from './types.ts';

export const LOCATIONS = {
  '台北市': ['信義區', '大安區', '中山區', '松山區', '中正區'],
  '新北市': ['板橋區', '新莊區', '中和區', '永和區', '三重區'],
  '台中市': ['西屯區', '南屯區', '北屯區', '西區', '中區'],
  '高雄市': ['苓雅區', '前金區', '新興區', '左營區', '鼓山區'],
};

export const GOALS = [
  { value: DevelopmentGoal.Residential, icon: 'building-cottage' },
  { value: DevelopmentGoal.Commercial, icon: 'building-skyscraper' },
  { value: DevelopmentGoal.MixedUse, icon: 'building-store' },
  { value: DevelopmentGoal.PublicSpace, icon: 'trees' },
];

export const STYLES = [
  { value: DesignStyle.Modern, image: 'https://picsum.photos/seed/modern/600/400' },
  { value: DesignStyle.Eco, image: 'https://picsum.photos/seed/eco/600/400' },
  { value: DesignStyle.Futuristic, image: 'https://picsum.photos/seed/futuristic/600/400' },
];

export const PRIORITIES: DesignPriority[] = [
  DesignPriority.Sustainability,
  DesignPriority.Community,
  DesignPriority.Profitability,
  DesignPriority.Aesthetics,
  DesignPriority.Technology,
  DesignPriority.Wellbeing,
  DesignPriority.CostEffective,
  DesignPriority.Accessibility,
];

export const GENERATING_MESSAGES = [
  '正在初始化 AI 引擎...',
  '正在建立專案情境...',
  'AI 正在分析您的需求...',
  '正在生成文字報告...',
  '正在生成建築預覽圖...',
  '即將完成...'
];
