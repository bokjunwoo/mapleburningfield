'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const UnionZero = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.UNION_ZERO,
  });

  const rateOption: SelectMenuItem = {
    label: '제로 유니온 공격대원',
    key: RATE_NAME.UNION_ZERO,
    items: [
      { value: 0, label: '미적용' },
      { value: 4, label: 'B (+4%)' },
      { value: 6, label: 'A (+6%)' },
      { value: 8, label: 'S (+8%)' },
      { value: 10, label: 'SS (+10%)' },
      { value: 12, label: 'SSS (+12%)' },
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

export default UnionZero;
