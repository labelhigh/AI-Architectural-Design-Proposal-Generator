
import React from 'react';
import { ProjectData, GeneratedReportData } from '../types.ts';

interface GeneratedReportProps {
  data: ProjectData;
  report: GeneratedReportData;
  image: string | null;
}

const ReportSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8 bg-white border border-slate-200 rounded-lg shadow-sm">
    <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-800 border-b border-slate-200 pb-3 mb-4">{title}</h3>
        <div className="text-slate-600 leading-relaxed space-y-4">{children}</div>
    </div>
  </div>
);

export const GeneratedReport: React.FC<GeneratedReportProps> = ({ data, report, image }) => {
  return (
    <div className="animate-fade-in">
      <div className="text-left mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">{data.projectName}</h1>
        <h2 className="text-2xl text-indigo-600 mt-2">建築設計初步建議書</h2>
      </div>

      <ReportSection title="第一章：專案概述">
        <p>{report.overview}</p>
      </ReportSection>

      <ReportSection title="第二章：基地環境模擬分析">
        <p>根據初步的地理資訊系統 (GIS) 數據模擬，本基地具有以下環境特徵：</p>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><strong className="font-semibold text-slate-800">日照與風場：</strong> {report.analysis.sunlightAndWind}</li>
            <li><strong className="font-semibold text-slate-800">交通可及性：</strong> {report.analysis.accessibility}</li>
            <li><strong className="font-semibold text-slate-800">周邊機能：</strong> {report.analysis.surroundings}</li>
        </ul>
      </ReportSection>

      <ReportSection title="第三章：核心設計方案">
        <h4 className="text-xl font-semibold text-slate-800 mb-4">{report.solution.title}</h4>
        {image ? (
            <img src={image} alt={report.solution.title} className="w-full h-auto aspect-video object-cover rounded-lg mb-4 shadow-md"/>
        ) : (
            <div className="w-full aspect-video bg-slate-200 rounded-lg mb-4 flex items-center justify-center animate-pulse">
                <p className="text-slate-500">正在生成預覽圖...</p>
            </div>
        )}
        <p>{report.solution.description}</p>
      </ReportSection>
      
      <ReportSection title="第四章：關鍵特色亮點">
        <p>為實現您的核心價值，本方案將整合以下關鍵特色：</p>
        <ul className="list-disc list-inside space-y-3 mt-4 text-slate-700">
          {report.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </ReportSection>

      <ReportSection title="第五章：結論">
        <p>{report.conclusion}</p>
      </ReportSection>
    </div>
  );
};
