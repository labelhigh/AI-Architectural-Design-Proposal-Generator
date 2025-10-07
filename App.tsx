
import React, { useState, useCallback, useMemo } from 'react';
import { ProjectData, DevelopmentGoal, DesignStyle, DesignPriority, GeneratedReportData } from './types.ts';
import { LOCATIONS, GOALS, STYLES, PRIORITIES } from './constants.ts';
import { Header } from './components/Header.tsx';
import { StepCard } from './components/StepCard.tsx';
import { IconCardSelect } from './components/IconCardSelect.tsx';
import { ImageCardSelect } from './components/ImageCardSelect.tsx';
import { TagSelect } from './components/TagSelect.tsx';
import { AreaSlider } from './components/AreaSlider.tsx';
import { GeneratingLoader } from './components/GeneratingLoader.tsx';
import { GeneratedReport } from './components/GeneratedReport.tsx';
import { generateProposalText, generateProposalImage } from './services/gemini.ts';

const App: React.FC = () => {
  const [projectName, setProjectName] = useState('南港之心社區計畫');
  const [city, setCity] = useState('台北市');
  const [district, setDistrict] = useState('信義區');
  const [area, setArea] = useState(10000);
  const [goal, setGoal] = useState<DevelopmentGoal>(DevelopmentGoal.MixedUse);
  const [style, setStyle] = useState<DesignStyle>(DesignStyle.Eco);
  const [priorities, setPriorities] = useState<DesignPriority[]>([
    DesignPriority.Sustainability,
    DesignPriority.Community,
    DesignPriority.Wellbeing,
  ]);

  const [isGenerating, setIsGenerating] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [generatedData, setGeneratedData] = useState<GeneratedReportData | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePriorityChange = useCallback((priority: DesignPriority) => {
    setPriorities(prev => {
      const isSelected = prev.includes(priority);
      if (isSelected) {
        return prev.filter(p => p !== priority);
      } else {
        if (prev.length < 3) {
          return [...prev, priority];
        }
        return prev;
      }
    });
  }, []);

  const projectData: ProjectData = useMemo(() => ({
    projectName,
    location: { city, district },
    area,
    goal,
    style,
    priorities
  }), [projectName, city, district, area, goal, style, priorities]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setShowReport(false);
    setError(null);

    try {
        const reportTextData = await generateProposalText(projectData);
        setGeneratedData(reportTextData);
        
        if (reportTextData?.solution?.imagePrompt) {
            const imageUrl = await generateProposalImage(reportTextData.solution.imagePrompt);
            setGeneratedImage(imageUrl);
        }

        setShowReport(true);
        window.scrollTo(0, 0);
    } catch (e) {
        console.error(e);
        setError('生成建議書時發生錯誤，請稍後再試。');
    } finally {
        setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setShowReport(false);
    setIsGenerating(false);
    setGeneratedData(null);
    setGeneratedImage(null);
    setError(null);
    setProjectName('南港之心社區計畫');
    setCity('台北市');
    setDistrict('信義區');
    setArea(10000);
    setGoal(DevelopmentGoal.MixedUse);
    setStyle(DesignStyle.Eco);
    setPriorities([
        DesignPriority.Sustainability,
        DesignPriority.Community,
        DesignPriority.Wellbeing,
    ]);
    window.scrollTo(0, 0);
  };

  const districts = useMemo(() => LOCATIONS[city as keyof typeof LOCATIONS] || [], [city]);
  
  const isFormValid = projectName.trim() !== '' && priorities.length === 3;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <div className="flex flex-col md:flex-row">
        <Header />
        <main className="flex-1 p-4 sm:p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            {showReport && generatedData ? (
              <GeneratedReport data={projectData} report={generatedData} image={generatedImage} onReset={handleReset} />
            ) : (
              <>
                <div className="space-y-12">
                  <StepCard step="1" title="專案基本資料 (Project Basics)">
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="projectName" className="block text-lg font-medium text-indigo-700 mb-2">專案名稱</label>
                        <input
                          type="text"
                          id="projectName"
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
                          placeholder="例如：南港之心社區計畫"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="city" className="block text-lg font-medium text-indigo-700 mb-2">基地位置</label>
                          <div className="flex gap-4">
                            <select
                              id="city"
                              value={city}
                              onChange={(e) => {
                                setCity(e.target.value);
                                setDistrict(LOCATIONS[e.target.value as keyof typeof LOCATIONS][0]);
                              }}
                              className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
                            >
                              {Object.keys(LOCATIONS).map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                            <select
                              id="district"
                              value={district}
                              onChange={(e) => setDistrict(e.target.value)}
                              className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
                            >
                              {districts.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="area" className="block text-lg font-medium text-indigo-700 mb-2">基地面積</label>
                          <AreaSlider value={area} onChange={setArea} />
                        </div>
                      </div>
                    </div>
                  </StepCard>

                  <StepCard step="2" title="開發核心目標 (Core Development Goal)">
                    <IconCardSelect options={GOALS} selectedValue={goal} onSelect={setGoal} />
                  </StepCard>
                  
                  <StepCard step="3" title="設計風格與優先級 (Design Style & Priorities)">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-medium text-indigo-700 mb-4">您偏好的建築風格是什麼？</h3>
                            <ImageCardSelect options={STYLES} selectedValue={style} onSelect={setStyle} />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-indigo-700 mb-4">請選擇您最重視的 3 個設計價值：</h3>
                            <TagSelect options={PRIORITIES} selectedValues={priorities} onSelect={handlePriorityChange} />
                        </div>
                    </div>
                  </StepCard>
                  
                  <div className="text-center pt-8">
                    {isGenerating ? (
                      <GeneratingLoader />
                    ) : (
                      <>
                        <button
                          onClick={handleGenerate}
                          disabled={!isFormValid}
                          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold text-xl py-4 px-12 rounded-full shadow-lg shadow-indigo-500/30 transform hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                          生成我的設計建議書
                        </button>
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                        {!isFormValid && priorities.length !== 3 && <p className="text-slate-500 mt-2">請選擇 3 個設計價值以繼續。</p>}
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
