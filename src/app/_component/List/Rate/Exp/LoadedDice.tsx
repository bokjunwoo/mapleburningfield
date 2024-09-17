'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const LoadedDice = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.LOADED_DICE,
  });

  const rateOption: SelectMenuItem = {
    label: '로디드 다이스',
    key: RATE_NAME.LOADED_DICE,
    items: [
      { value: 0, label: '미적용' },
      { value: 30, label: '주사위 6 (+30%)' },
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

export default LoadedDice;
