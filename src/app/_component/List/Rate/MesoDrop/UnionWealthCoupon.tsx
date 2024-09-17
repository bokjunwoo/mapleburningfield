'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import {
  mesoDropRateSelector,
  mesoDropRateState,
} from '@/app/atoms/mesoDropState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const UnionWealthCoupon = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: mesoDropRateSelector,
    state: mesoDropRateState,
    rateName: RATE_NAME.UNION_WEALTH_COUPON,
  });

  const rateOption: SelectMenuItem = {
    label: '유니온의 부',
    key: RATE_NAME.UNION_WEALTH_COUPON,
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

export default UnionWealthCoupon;
