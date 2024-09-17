'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import {
  presetItemDropRateState,
  presetItemDropRateStateSelector,
  presetMesoDropRateState,
} from '@/app/atoms/presetRateState';
import { RATE_NAME } from '@/app/constants/rate';
import usePotionRateSelect from '@/app/hooks/usePotionRateSelect';

const WealthAcquisitionPotion = () => {
  const { value, handleRateChange } = usePotionRateSelect({
    rateSelector: presetItemDropRateStateSelector,
    state: presetItemDropRateState,
    rateName: RATE_NAME.WEALTH_ACQUISITION_POTION,
    syncState: presetMesoDropRateState,
  });

  const rateOption: SelectMenuItem = {
    label: '재물 획득의 비약',
    key: RATE_NAME.WEALTH_ACQUISITION_POTION,
    items: [
      { value: 0, label: '미적용' },
      { value: 20, label: '적용 (+20%)' },
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

export default WealthAcquisitionPotion;
