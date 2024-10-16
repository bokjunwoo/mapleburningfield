'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const AzmothPotion = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.AZMOTH_POTION,
  });

  const rateOption: SelectMenuItem = {
    label: '아즈모스 영약',
    key: RATE_NAME.AZMOTH_POTION,
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

export default AzmothPotion;
