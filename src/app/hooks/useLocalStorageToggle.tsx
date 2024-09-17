import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  presetExpRateState,
  presetItemDropRateState,
  presetMesoDropRateState,
} from '../atoms/presetRateState';
import { RATE_KEY } from '../constants/rate';
import useLocalStorage from './useLocalStorage';

const useLocalStorageToggle = (initialState: boolean = false) => {
  const presetExpRate = useRecoilValue(presetExpRateState);
  const presetMesoDropRate = useRecoilValue(presetMesoDropRateState);
  const presetItemDropRate = useRecoilValue(presetItemDropRateState);

  const [, setExpRateStoredValue] = useLocalStorage<SelectItem[]>(
    RATE_KEY.EXP,
    [],
  );

  const [, setMesoDropRateStoredValue] = useLocalStorage<SelectItem[]>(
    RATE_KEY.MESO_DROP,
    [],
  );

  const [, setItemDropRateStoredValue] = useLocalStorage<SelectItem[]>(
    RATE_KEY.ITEM_DROP,
    [],
  );

  const [isToggled, setIsToggled] = useState(initialState);

  const handleToggleOn = () => {
    setIsToggled(true);
  };

  const handleToggleOff = () => {
    setExpRateStoredValue(presetExpRate);
    setMesoDropRateStoredValue(presetMesoDropRate);
    setItemDropRateStoredValue(presetItemDropRate);
    setIsToggled(false);
  };

  return { isToggled, handleToggleOn, handleToggleOff };
};

export default useLocalStorageToggle;
