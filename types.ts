
export enum DevelopmentGoal {
  Residential = '居住社區 (Residential Hub)',
  Commercial = '商業中心 (Commercial Center)',
  MixedUse = '複合機能社區 (Mixed-Use Community)',
  PublicSpace = '公共綠地與設施 (Public & Green Space)',
}

export enum DesignStyle {
  Modern = '現代簡約 (Modern & Minimalist)',
  Eco = '生態永續 (Eco-Friendly & Natural)',
  Futuristic = '科技未來 (Futuristic & High-Tech)',
}

export enum DesignPriority {
  Sustainability = '永續環保',
  Community = '社區連結',
  Profitability = '商業獲利',
  Aesthetics = '藝術美學',
  Technology = '智慧科技',
  Wellbeing = '健康福祉',
  CostEffective = '成本效益',
  Accessibility = '交通便利',
}

export interface ProjectData {
  projectName: string;
  location: {
    city: string;
    district: string;
  };
  area: number;
  goal: DevelopmentGoal;
  style: DesignStyle;
  priorities: DesignPriority[];
}
