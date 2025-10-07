
import React, { useState } from 'react';
import { ProjectData, GeneratedReportData } from '../types.ts';
import { GOALS, STYLES, PRIORITIES, LOCATIONS } from '../constants.ts';
import { StepCard } from '../components/StepCard.tsx';
import { IconCardSelect } from '../components/IconCardSelect.tsx';
import { ImageCardSelect } from '../components/ImageCardSelect.tsx';
import { TagSelect } from '../components/TagSelect.tsx';
import { AreaSlider } from '../components/AreaSlider.tsx';
import { GeneratingLoader } from '../components/GeneratingLoader.tsx';
import { generateProposalText, generateProposalImage } from '../services/gemini.ts';
import { useProjectForm } from '../hooks/useProjectForm.ts';

interface FormPageProps {
  onGenerateSuccess: (
    projectData: ProjectData,
    reportData: GeneratedReportData,
    imageUrl: string
  ) => void;
}

export const FormPage: React.FC<FormPageProps> = ({ onGenerateSuccess }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    projectName, setProjectName,
    city, setCity,
    district, setDistrict,
    area, setArea,
    goal, setGoal,
    style, setStyle,
    priorities, handlePriorityChange,
    projectData,
    districts,
    isFormValid,
  } = useProjectForm();

  const handleGenerate = async () => {
    if (!isFormValid) return;

    setIsGenerating(true);
    setError(null);

    try {
        const reportTextData = await generateProposalText(projectData);
        let imageUrl = '';
        if (reportTextData?.solution?.imagePrompt) {
            imageUrl = await generateProposalImage(reportTextData.solution.imagePrompt);
        }
        onGenerateSuccess(projectData, reportTextData, imageUrl);
        window.scrollTo(0, 0);
    } catch (e) {
        console.error(e);
        setError('生成建議書時發生錯誤，請稍後再試。');
        setIsGenerating(false);
    }
  };

  return (
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
  );
};
