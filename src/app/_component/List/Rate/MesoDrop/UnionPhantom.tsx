'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import {
  mesoDropRateSelector,
  mesoDropRateState,
} from '@/app/atoms/mesoDropState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const UnionPhantom = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: mesoDropRateSelector,
    state: mesoDropRateState,
    rateName: RATE_NAME.UNION_PHANTOM,
  });

  const rateOption: SelectMenuItem = {
    label: '팬텀 유니온',
    key: RATE_NAME.UNION_PHANTOM,
    items: [
      { value: 0, label: '미적용' },
      { value: 1, label: 'B (+1%)' },
      { value: 2, label: 'A (+2%)' },
      { value: 3, label: 'S (+3%)' },
      { value: 4, label: 'SS (+4%)' },
      { value: 5, label: 'SSS (+5%)' },
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

export default UnionPhantom;
