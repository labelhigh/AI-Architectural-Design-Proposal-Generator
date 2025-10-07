import React from 'react';
import { DevelopmentGoal } from '../types.ts';

interface IconCardSelectProps {
  options: { value: DevelopmentGoal; icon: string }[];
  selectedValue: DevelopmentGoal;
  onSelect: (value: DevelopmentGoal) => void;
}

const ICONS: { [key: string]: React.ReactNode } = {
    'building-cottage': <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 21l18 0" />
        <path d="M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11" />
        <path d="M12 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2z" />
        <path d="M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5" />
    </svg>,
    'building-skyscraper': <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 21l18 0" />
        <path d="M5 21v-14l8 -4v18" />
        <path d="M19 21v-10l-6 -4" />
        <path d="M9 9l0 .01" />
        <path d="M9 12l0 .01" />
        <path d="M9 15l0 .01" />
        <path d="M9 18l0 .01" />
    </svg>,
    'building-store': <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 21l18 0" />
        <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
        <path d="M5 21l0 -10.15" />
        <path d="M19 21l0 -10.15" />
        <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
    </svg>,
    'trees': <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M16 5l-4 4l-4 -4" />
        <path d="M12 15a6 6 0 0 0 6 -6h-12a6 6 0 0 0 6 6z" />
        <path d="M12 15v6" />
        <path d="M12 21h-2" /><path d="M12 21h2" />
    </svg>
};

export const IconCardSelect: React.FC<IconCardSelectProps> = ({ options, selectedValue, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {options.map(({ value, icon }) => {
        const isSelected = selectedValue === value;
        return (
          <button
            key={value}
            onClick={() => onSelect(value)}
            className={`p-6 rounded-xl border-2 text-center transition-all duration-300 transform hover:-translate-y-1 ${
              isSelected
                ? 'bg-indigo-50 border-indigo-500'
                : 'bg-slate-100 border-slate-200 hover:border-indigo-400'
            }`}
          >
            <div className={`mx-auto mb-3 transition-colors ${isSelected ? 'text-indigo-500' : 'text-slate-500'}`}>
                {ICONS[icon]}
            </div>
            <p className={`font-semibold transition-colors ${isSelected ? 'text-indigo-800' : 'text-slate-700'}`}>
              {value}
            </p>
          </button>
        );
      })}
    </div>
  );
};