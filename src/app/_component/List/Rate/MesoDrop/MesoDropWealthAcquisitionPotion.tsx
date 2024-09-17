'use client';

import { useRecoilValue } from 'recoil';
import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import { itemDropRateState } from '@/app/atoms/itemDropState';
import {
  mesoDropRateSelector,
  mesoDropRateState,
} from '@/app/atoms/mesoDropState';
import { RATE_NAME } from '@/app/constants/rate';
import usePotionRateSelect from '@/app/hooks/usePotionRateSelect';

const MesoDropWealthAcquisitionPotion = () => {
  const { value, handleRateChange } = usePotionRateSelect({
    rateSelector: mesoDropRateSelector,
    state: mesoDropRateState,
    rateName: RATE_NAME.WEALTH_ACQUISITION_POTION,
    syncState: itemDropRateState,
  });

  const mesoDropItem = useRecoilValue(mesoDropRateState);

  const potionValue = () => {
    const totalMesoDropRate = mesoDropItem.reduce(
      (total, rate) => total + rate.value,
      0,
    );
    if (totalMesoDropRate === 0) return 20;

    const potionRate = mesoDropItem.find(
      (rate) => rate.label === RATE_NAME.WEALTH_ACQUISITION_POTION,
    );

    const isPotion = potionRate?.value !== 0 && potionRate;
    const applyMultiplicationPotion = Math.floor(
      (100 + totalMesoDropRate - (isPotion ? 20 : 0)) * 1.2 -
        100 -
        totalMesoDropRate,
    );

    return applyMultiplicationPotion + (isPotion ? 20 : 0);
  };

  const rateOption: SelectMenuItem = {
    label: '재획비(곱적용)',
    key: RATE_NAME.WEALTH_ACQUISITION_POTION,
    items: [
      { value: 0, label: '미적용' },
      { value: 20, label: `적용 (+${potionValue()})%` },
    ],
  };

  return (
    <RateSelectListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default MesoDropWealthAcquisitionPotion;
