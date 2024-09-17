import { useRecoilState } from 'recoil';
import { expRateState } from '../atoms/expRateState';
import { itemDropRateState } from '../atoms/itemDropState';
import { mesoDropRateState } from '../atoms/mesoDropState';
import { mergeRates } from '../utils/helper';

const useLoadPreset = () => {
  const [expRate, setExpRate] = useRecoilState(expRateState);
  const [itemDropRate, setItemDropRate] = useRecoilState(itemDropRateState);
  const [mesoDropRate, setMesoDropRate] = useRecoilState(mesoDropRateState);

  const handleClick = () => {
    const expStoredValue = window.localStorage.getItem('exp_rate_preset');
    const expParsedValue = expStoredValue ? JSON.parse(expStoredValue) : [];

    const itemDropStoredValue = window.localStorage.getItem(
      'item_drop_rate_preset',
    );
    const itemDropParsedValue = itemDropStoredValue
      ? JSON.parse(itemDropStoredValue)
      : [];

    const mesoDropStoredValue = window.localStorage.getItem(
      'meso_drop_rate_preset',
    );
    const mesoDropParsedValue = mesoDropStoredValue
      ? JSON.parse(mesoDropStoredValue)
      : [];

    const mergedExpRate = mergeRates(expRate, expParsedValue);
    const itemDropMergedRate = mergeRates(itemDropRate, itemDropParsedValue);
    const mesoDropMergedRate = mergeRates(mesoDropRate, mesoDropParsedValue);

    setExpRate(mergedExpRate);
    setItemDropRate(itemDropMergedRate);
    setMesoDropRate(mesoDropMergedRate);
  };

  return handleClick;
};

export default useLoadPreset;
