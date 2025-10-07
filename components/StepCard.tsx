import React from 'react';

interface StepCardProps {
  step: string;
  title: string;
  children: React.ReactNode;
}

export const StepCard: React.FC<StepCardProps> = ({ step, title, children }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0 bg-indigo-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl">
            {step}
          </div>
          <h2 className="ml-4 text-2xl font-semibold text-slate-900">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};