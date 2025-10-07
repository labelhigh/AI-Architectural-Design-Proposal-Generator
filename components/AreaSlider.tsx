import React from 'react';

interface AreaSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export const AreaSlider: React.FC<AreaSliderProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col">
      <input
        type="range"
        min="1000"
        max="50000"
        step="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
      />
      <div className="flex justify-between text-sm text-slate-500 mt-2">
        <span>1,000 m²</span>
        <span className="font-bold text-lg text-indigo-600">
          {value.toLocaleString()} m²
        </span>
        <span>50,000+ m²</span>
      </div>
    </div>
  );
};