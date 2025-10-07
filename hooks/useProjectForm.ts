
import { useState, useCallback, useMemo } from 'react';
import { ProjectData, DevelopmentGoal, DesignStyle, DesignPriority } from '../types.ts';
import { LOCATIONS } from '../constants.ts';

const defaultValues = {
  projectName: '南港之心社區計畫',
  city: '台北市',
  district: '信義區',
  area: 10000,
  goal: DevelopmentGoal.MixedUse,
  style: DesignStyle.Eco,
  priorities: [
    DesignPriority.Sustainability,
    DesignPriority.Community,
    DesignPriority.Wellbeing,
  ],
};

export const useProjectForm = () => {
  const [projectName, setProjectName] = useState(defaultValues.projectName);
  const [city, setCity] = useState(defaultValues.city);
  const [district, setDistrict] = useState(defaultValues.district);
  const [area, setArea] = useState(defaultValues.area);
  const [goal, setGoal] = useState<DevelopmentGoal>(defaultValues.goal);
  const [style, setStyle] = useState<DesignStyle>(defaultValues.style);
  const [priorities, setPriorities] = useState<DesignPriority[]>(defaultValues.priorities);

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
  
  const resetForm = useCallback(() => {
    setProjectName(defaultValues.projectName);
    setCity(defaultValues.city);
    setDistrict(defaultValues.district);
    setArea(defaultValues.area);
    setGoal(defaultValues.goal);
    setStyle(defaultValues.style);
    setPriorities(defaultValues.priorities);
    window.scrollTo(0, 0);
  }, []);

  const districts = useMemo(() => LOCATIONS[city as keyof typeof LOCATIONS] || [], [city]);
  
  const isFormValid = useMemo(() => projectName.trim() !== '' && priorities.length === 3, [projectName, priorities]);

  return {
    // state
    projectName,
    city,
    district,
    area,
    goal,
    style,
    priorities,
    // derived state
    projectData,
    districts,
    isFormValid,
    // setters
    setProjectName,
    setCity,
    setDistrict,
    setArea,
    setGoal,
    setStyle,
    handlePriorityChange,
    resetForm,
  };
};
