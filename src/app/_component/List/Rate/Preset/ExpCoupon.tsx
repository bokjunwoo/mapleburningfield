'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import {
  presetExpRateState,
  presetExpRateStateSelector,
} from '@/app/atoms/presetRateState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const ExpCoupon = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: presetExpRateStateSelector,
    state: presetExpRateState,
    rateName: RATE_NAME.EXP_COUPON,
  });

  const rateOption: SelectMenuItem = {
    label: '경험치 쿠폰',
    key: RATE_NAME.EXP_COUPON,
    items: [
      { value: 0, label: '미적용' },
      { value: 50, label: '1.5배 쿠폰 (+50%)' },
      { value: 100, label: '2배 쿠폰 (+100%)' },
      { value: 200, label: '3배 쿠폰 (+200%)' },
      { value: 300, label: '4배 쿠폰 (+300%)' },
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

export default ExpCoupon;
