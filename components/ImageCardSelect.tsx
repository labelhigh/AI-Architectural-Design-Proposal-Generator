import React from 'react';
import { DesignStyle } from '../types.ts';

interface ImageCardSelectProps {
  options: { value: DesignStyle; image: string }[];
  selectedValue: DesignStyle;
  onSelect: (value: DesignStyle) => void;
}

export const ImageCardSelect: React.FC<ImageCardSelectProps> = ({ options, selectedValue, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {options.map(({ value, image }) => {
        const isSelected = selectedValue === value;
        return (
          <button
            key={value}
            onClick={() => onSelect(value)}
            className={`relative rounded-xl overflow-hidden border-4 transition-all duration-300 transform hover:scale-105 group ${
              isSelected ? 'border-indigo-500' : 'border-transparent hover:border-indigo-400'
            }`}
          >
            <img src={image} alt={value} className="w-full h-40 object-cover" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center p-4">
              <p className="text-white font-bold text-lg text-center">{value}</p>
            </div>
            {isSelected && (
              <div className="absolute top-2 right-2 bg-indigo-600 text-white rounded-full h-8 w-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                   <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};