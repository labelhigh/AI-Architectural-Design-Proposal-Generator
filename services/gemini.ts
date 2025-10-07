
import { ProjectData, GeneratedReportData } from '../types.ts';

const mockReportData: GeneratedReportData = {
  overview: '「南港之心社區計畫」旨在於台北市信義區打造一個融合生態、科技與社群的複合機能社區。本計畫基地位於交通樞紐，面積達 10,000 平方公尺，將以「生態永續」為核心設計風格，優先考量永續環保、社區連結與居民健康福祉，目標是建立一個不僅具商業價值，更能提升都市生活品質的指標性建築聚落。',
  analysis: {
    sunlightAndWind: '基地座向良好，能最大化接收冬季日照並有效阻擋夏季西曬。周邊風場模擬顯示，透過建築佈局可引導舒適的微風穿梭社區，降低熱島效應。',
    accessibility: '緊鄰捷運站與主要幹道，擁有極佳的大眾運輸與開車可及性。未來將規劃人車分道的動線與共享單車站點，進一步提升交通便利性。',
    surroundings: '周邊商業機能成熟，並有多處公園綠地。本案將與周邊環境串聯，形成一個完整的都市生活圈，提供居民與訪客豐富多元的活動選項。',
  },
  solution: {
    title: '都市綠洲：會呼吸的垂直森林社區',
    description: '我們的設計方案「都市綠洲」，以生態永續為基石，將建築視為活的有機體。設計將大量採用垂直綠化、空中花園與節能建材，創造出彷彿會呼吸的建築立面。社區內部將規劃共享工作空間、智慧農場與多功能活動中心，促進居民互動，並透過智慧科技管理能源與水資源，打造一個真正與自然共生、與社群共榮的未來社區。',
    imagePrompt: 'Photorealistic rendering of a futuristic eco-friendly mixed-use community building with vertical gardens and sky bridges in Taipei, at dusk, warm lighting, inspired by Vincent Callebaut architectures.'
  },
  keyFeatures: [
    '太陽能與雨水回收系統：整合可再生能源系統，達成高度能源自給自足，並利用回收雨水進行植被灌溉與公共區域清潔。',
    '立體生態廊道：透過空中廊橋與綠化平台，串連社區內外的公園綠地，為野生動植物提供棲息地，並為居民創造親近自然的休憩空間。',
    '全齡化共享空間：設計包含兒童遊戲區、青年共同工作室、樂齡健康中心等多樣化公共設施，促進跨代交流與社區凝聚力。',
    '智慧健康監測系統：在公共空間與住宅單位導入環境感測器，監控空氣品質、溫度與濕度，確保居民享有最健康的居住環境。',
    '在地化建材與循環經濟：優先採用本地生產的環保建材，並在設計中導入模組化概念，方便未來維修與材料回收，實踐循環經濟理念。'
  ],
  conclusion: '「南港之心社區計畫」不僅是一個建築開發案，更是對未來都市生活的一次前瞻性探索。本建議書所提出的「都市綠洲」方案，完美結合了您所重視的永續、社群與福祉價值。我們相信，此計畫將成為台北市的新地標，並為所有使用者帶來無與倫比的價值。建議下一步可進行更詳細的基地勘查與財務模型分析。'
};

/**
 * Simulates generating a proposal text by returning mock data after a delay.
 * @param data The project data (ignored in this mock version).
 * @returns A promise that resolves to the mock report data.
 */
export async function generateProposalText(data: ProjectData): Promise<GeneratedReportData> {
  console.log("Simulating report generation for:", data);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockReportData);
    }, 1500); // Simulate network and generation delay
  });
}

/**
 * Simulates generating a proposal image by returning a static placeholder URL after a delay.
 * @param prompt The image prompt (ignored in this mock version).
 * @returns A promise that resolves to a placeholder image URL.
 */
export async function generateProposalImage(prompt: string): Promise<string> {
    console.log("Simulating image generation with prompt:", prompt);
    return new Promise(resolve => {
        setTimeout(() => {
            // Using a static, high-quality placeholder image for demonstration.
            resolve('https://picsum.photos/seed/arch-demo/1280/720');
        }, 1500); // Simulate image generation delay
    });
}
