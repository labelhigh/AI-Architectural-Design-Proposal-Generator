import React from 'react';
import { DesignPriority } from '../types.ts';

interface TagSelectProps {
  options: DesignPriority[];
  selectedValues: DesignPriority[];
  onSelect: (value: DesignPriority) => void;
}

export const TagSelect: React.FC<TagSelectProps> = ({ options, selectedValues, onSelect }) => {
  const isMaxSelected = selectedValues.length >= 3;

  return (
    <div className="flex flex-wrap gap-3">
      {options.map(value => {
        const isSelected = selectedValues.includes(value);
        const isDisabled = !isSelected && isMaxSelected;

        return (
          <button
            key={value}
            onClick={() => onSelect(value)}
            disabled={isDisabled}
            className={`px-4 py-2 rounded-full border font-medium transition-all duration-200 ${
              isSelected
                ? 'bg-indigo-600 border-indigo-600 text-white'
                : 'bg-white border-slate-300 text-slate-700'
            } ${
              isDisabled
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:border-indigo-500 hover:text-indigo-600'
            }`}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};