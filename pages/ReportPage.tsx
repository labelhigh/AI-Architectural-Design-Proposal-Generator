
import React from 'react';
import { ProjectData, GeneratedReportData } from '../types.ts';
import { GeneratedReport } from '../components/GeneratedReport.tsx';

interface ReportPageProps {
  projectData: ProjectData;
  reportData: GeneratedReportData;
  image: string | null;
  onReset: () => void;
}

export const ReportPage: React.FC<ReportPageProps> = ({ projectData, reportData, image, onReset }) => {
  return (
    <>
      <GeneratedReport data={projectData} report={reportData} image={image} />
      <div className="text-center mt-12">
        <button 
          onClick={onReset}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-3 px-10 rounded-full shadow-lg shadow-indigo-500/30 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          產生新的建議書
        </button>
      </div>
    </>
  );
};
