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

export const FEATURE_DATABASE: Record<DesignPriority, string[]> = {
  [DesignPriority.Sustainability]: ["太陽能光電板：在屋頂大面積鋪設，供應公共設施部分用電。", "雨水回收系統：收集雨水用於植栽澆灌與沖廁，實現水資源循環利用。", "綠屋頂隔熱：降低建築耗能，並提供都市生物多樣性棲地。"],
  [DesignPriority.Community]: ["共享廚房與交誼廳：促進居民互動，打造有溫度的社群生活。", "屋頂開放農園：提供都市農耕的樂趣，連結人與土地。", "社區營造活動空間：可彈性使用的多功能空間，舉辦課程、市集或展覽。"],
  [DesignPriority.Profitability]: ["一樓黃金店面規劃：最大化沿街商業價值，吸引人流。", "高彈性辦公空間：可自由分割的辦公單位，滿足不同企業需求。", "廣告帷幕牆：具備媒體播放功能的外牆，創造額外廣告收益。"],
  [DesignPriority.Aesthetics]: ["入口意象藝術裝置：邀請藝術家打造地標性公共藝術。", "動態光影立面：利用燈光與材質變化，讓建築在不同時段呈現多樣表情。", "景觀水池設計：結合生態與美學，創造寧靜的戶外休憩空間。"],
  [DesignPriority.Technology]: ["全區智慧門禁與監控：結合人臉辨識，提供無接觸且安全的通行體驗。", "智能停車引導系統：自動偵測車位，引導車輛快速停放。", "建築能源管理系統 (BEMS)：監控並優化整體建築的能源使用效率。"],
  [DesignPriority.Wellbeing]: ["健身房與瑜珈教室：提供住戶或員工專屬的運動休閒設施。", "全天候採光設計：優化窗牆比，引入自然光，提升室內空間的舒適度。", "新風換氣系統：過濾 PM2.5，確保室內空氣品質，守護居民健康。"],
  [DesignPriority.CostEffective]: ["模組化建材：採用標準化預製構件，縮短工期並降低成本。", "高效能節能設備：選用一級能效空調與照明設備，降低長期營運成本。", "耐久性建材選擇：減少未來維護與更換的頻率及費用。"],
  [DesignPriority.Accessibility]: ["無障礙通用設計：從入口到室內，全面考量行動不便者的使用需求。", "共享運具接駁站：規劃電動汽機車、自行車租借站點，串連大眾運輸。", "人車分道規劃：確保行人安全，創造友善的步行環境。"]
};

export const GENERATING_MESSAGES = [
  'AI 正在分析基地數據...',
  '正在模擬日照與風場環境...',
  '正在生成初步建築模型...',
  '正在評估設計方案可行性...',
  '正在撰寫評估報告...',
  '即將完成...'
];