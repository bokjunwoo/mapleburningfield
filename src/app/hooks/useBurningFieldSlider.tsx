import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  burningFieldState,
  burningFieldValueSelector,
} from '../atoms/burningFieldState';

const useBurningFieldSlider = (mapName: string) => {
  const initialBurningFieldValue = useRecoilValue(
    burningFieldValueSelector(mapName),
  );
  const setBurningField = useSetRecoilState(burningFieldState);
  const [sliderValue, setSliderValue] = useState<number>(
    initialBurningFieldValue / 10,
  );

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setBurningField((prevBurningField) => {
      const existingItemIndex = prevBurningField.findIndex(
        (value) => value.map_name === mapName,
      );
      if (existingItemIndex !== -1) {
        return prevBurningField.map((item, index) =>
          index === existingItemIndex
            ? { ...item, burning_field: (newValue as number) * 10 }
            : item,
        );
      }
      return [
        ...prevBurningField,
        { map_name: mapName, burning_field: (newValue as number) * 10 },
      ];
    });

    setSliderValue(newValue as number);
  };

  return { sliderValue, handleSliderChange };
};

export default useBurningFieldSlider;
