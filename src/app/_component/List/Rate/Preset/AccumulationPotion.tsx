'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import {
  presetExpRateState,
  presetExpRateStateSelector,
} from '@/app/atoms/presetRateState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const AccumulationPotion = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: presetExpRateStateSelector,
    state: presetExpRateState,
    rateName: RATE_NAME.ACCUMULATION_POTION,
  });

  const rateOption: SelectMenuItem = {
    label: '경험 축적의 비약',
    key: RATE_NAME.ACCUMULATION_POTION,
    items: [
      { value: 0, label: '미적용' },
      { value: 10, label: '경축비 (+10%)' },
      { value: 20, label: '고농축 경축비 (+20%)' },
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

export default AccumulationPotion;
