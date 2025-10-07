import React from 'react';
import { ProjectData, DevelopmentGoal, DesignStyle, DesignPriority } from '../types.ts';
import { FEATURE_DATABASE } from '../constants.ts';

interface GeneratedReportProps {
  data: ProjectData;
  onReset: () => void;
}

const ReportSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8 bg-white border border-slate-200 rounded-lg shadow-sm">
    <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-800 border-b border-slate-200 pb-3 mb-4">{title}</h3>
        <div className="text-slate-600 leading-relaxed space-y-4">{children}</div>
    </div>
  </div>
);

export const GeneratedReport: React.FC<GeneratedReportProps> = ({ data, onReset }) => {
    
  const getOverview = () => {
    const location = `${data.location.city} ${data.location.district}`;
    if (data.goal === DevelopmentGoal.MixedUse && data.style === DesignStyle.Eco) {
      return `本專案「${data.projectName}」旨在於 ${location} 打造一個融合居住、商業與休閒的複合機能社區。設計將以 生態永續 為核心理念，致力於創造一個與自然共生、低碳環保的城市綠洲，並透過多元的空間規劃，促進居民的互動與社區的活力。`;
    }
    if (data.goal === DevelopmentGoal.Commercial && data.style === DesignStyle.Futuristic) {
      return `本專案「${data.projectName}」旨在於 ${location} 建立一座指標性的商業中心。設計將採用 科技未來 風格，整合最新的智慧建築技術，打造一個高效、便捷且具備未來感的頂級商辦空間，引領區域的商業發展。`;
    }
    // Generic fallback
    return `本專案「${data.projectName}」旨在於 ${location} 打造一個創新的建築項目。此專案將以 ${data.goal} 為核心目標，並採用 ${data.style} 的設計風格，致力於為地區帶來嶄新的面貌與價值。`;
  };

  const getDesignSolution = () => {
    switch (data.style) {
      case DesignStyle.Eco:
        return {
          title: '「綠色心臟」方案',
          image: 'https://picsum.photos/seed/eco-report/800/450',
          description: "本方案「綠色心臟」以「與自然共存」為核心，透過大面積的垂直綠化與屋頂花園，將建築本身轉化為都市的空氣清淨機。我們將導入海綿城市概念，設置雨水回收系統與透水鋪面，並大量採用再生建材，最小化建築的碳足跡。中央設計一座開放式庭園，成為社區的社交核心與微氣候調節器。"
        };
      case DesignStyle.Futuristic:
        return {
          title: '「數位方舟」方案',
          image: 'https://picsum.photos/seed/futuristic-report/800/450',
          description: "本方案「數位方舟」旨在打造一座次世代的智慧建築。建築外牆將整合太陽能發電玻璃 (BIPV)，實現能源自給。內部將佈署全面的物聯網 (IoT) 感測器，自動調控燈光、空調與安全系統。我們將規劃智慧物流通道與共享自動駕駛接駁站，為未來的城市生活模式預作準備。互動式的數位立面不僅是建築的表情，也能成為城市資訊的發布平台。"
        };
      case DesignStyle.Modern:
        return {
          title: '「城市畫布」方案',
          image: 'https://picsum.photos/seed/modern-report/800/450',
          description: "本方案「城市畫布」追求極致的簡約美學與功能性。設計採用清晰的幾何線條、大面積的玻璃帷幕與高品質的清水混凝土，創造出一個純粹而雋永的建築形態。空間規劃強調開放性與流動性，模糊室內外界線，將都市景觀引入建築之中。此方案不僅是一個建築，更是一面映照城市活力的畫布。"
        };
      default:
        return { title: '', image: '', description: '' };
    }
  };

  const designSolution = getDesignSolution();

  return (
    <div className="animate-fade-in">
      <div className="text-left mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">{data.projectName}</h1>
        <h2 className="text-2xl text-indigo-600 mt-2">建築設計初步建議書</h2>
      </div>

      <ReportSection title="第一章：專案概述">
        <p>{getOverview()}</p>
      </ReportSection>

      <ReportSection title="第二章：基地環境模擬分析">
        <p>根據初步的地理資訊系統 (GIS) 數據模擬，本基地具有以下環境特徵：</p>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><strong className="font-semibold text-slate-800">日照與風場：</strong> 基地座向良好，具備充足的自然採光潛力。模擬的年均風場顯示，夏季主導風向為西南風，冬季為東北風。建築設計可利用此特性進行自然通風規劃。</li>
            <li><strong className="font-semibold text-slate-800">交通可及性：</strong> 基地周邊 500 公尺內有多個主要幹道與大眾運輸站點，交通便利性高，具備發展為人本導向社區的潛力。</li>
            <li><strong className="font-semibold text-slate-800">周邊機能：</strong> 鄰近學區、公園與商業設施，生活機能完善。設計應考慮與周邊社區的連結性，創造共榮的都市紋理。</li>
        </ul>
      </ReportSection>

      <ReportSection title="第三章：核心設計方案">
        <h4 className="text-xl font-semibold text-slate-800 mb-4">{designSolution.title}</h4>
        <img src={designSolution.image} alt={designSolution.title} className="w-full rounded-lg mb-4 shadow-md"/>
        <p>{designSolution.description}</p>
      </ReportSection>
      
      <ReportSection title="第四章：關鍵特色亮點">
        <p>為實現您的核心價值，本方案將整合以下關鍵特色：</p>
        <ul className="list-disc list-inside space-y-3 mt-4 text-slate-700">
          {data.priorities.flatMap(p => FEATURE_DATABASE[p].slice(0, p === data.priorities[0] ? 2 : 1)).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </ReportSection>

      <ReportSection title="第五章：結論">
        <p>綜上所述，本初步設計建議書已根據您的核心目標與價值偏好，提出了一個具體的設計方向。此方案兼具前瞻性與可行性，我們相信它將為本地區帶來正面的發展，並成為一個令人驕傲的城市新地標。建議下一步可進行更詳細的財務評估與細部設計。</p>
      </ReportSection>
      
      <div className="text-center mt-12">
        <button 
          onClick={onReset}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-3 px-10 rounded-full shadow-lg shadow-indigo-500/30 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          產生新的建議書
        </button>
      </div>
    </div>
  );
};