
import React, { useState } from 'react';
import { ProjectData, GeneratedReportData } from './types.ts';
import { Header } from './components/Header.tsx';
import { FormPage } from './pages/FormPage.tsx';
import { ReportPage } from './pages/ReportPage.tsx';

const App: React.FC = () => {
  const [showReport, setShowReport] = useState(false);
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [generatedData, setGeneratedData] = useState<GeneratedReportData | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerateSuccess = (
    projectData: ProjectData,
    reportData: GeneratedReportData,
    imageUrl: string
  ) => {
    setProjectData(projectData);
    setGeneratedData(reportData);
    setGeneratedImage(imageUrl);
    setShowReport(true);
  };

  const handleReset = () => {
    setShowReport(false);
    setProjectData(null);
    setGeneratedData(null);
    setGeneratedImage(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <div className="flex flex-col md:flex-row">
        <Header />
        <main className="flex-1 p-4 sm:p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            {showReport && projectData && generatedData ? (
              <ReportPage 
                projectData={projectData}
                reportData={generatedData}
                image={generatedImage}
                onReset={handleReset}
              />
            ) : (
              <FormPage onGenerateSuccess={handleGenerateSuccess} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
