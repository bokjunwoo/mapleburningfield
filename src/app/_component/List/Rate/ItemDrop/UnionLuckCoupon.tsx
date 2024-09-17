'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import {
  itemDropRateState,
  itemDropRateSelector,
} from '@/app/atoms/itemDropState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const UnionLuckCoupon = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: itemDropRateSelector,
    state: itemDropRateState,
    rateName: RATE_NAME.UNION_LUCK_COUPON,
  });

  const rateOption: SelectMenuItem = {
    label: '유니온의 행운',
    key: RATE_NAME.UNION_LUCK_COUPON,
    items: [
      { value: 0, label: '미적용' },
      { value: 50, label: '적용 (+50%)' },
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

export default UnionLuckCoupon;
