'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const SpiritPendant = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.SPIRIT_PENDANT,
  });

  const rateOption: SelectMenuItem = {
    label: '정령의 팬던트',
    key: RATE_NAME.SPIRIT_PENDANT,
    items: [
      { value: 0, label: '미적용' },
      { value: 10, label: '1시간 미만 (+10%)' },
      { value: 20, label: '2시간 미만 (+20%)' },
      { value: 30, label: '2시간 이상 (+30%)' },
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

export default SpiritPendant;
