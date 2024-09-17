'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import {
  presetExpRateStateSelector,
  presetExpRateState,
} from '@/app/atoms/presetRateState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const MvpCoupon = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: presetExpRateStateSelector,
    state: presetExpRateState,
    rateName: RATE_NAME.MVP_COUPON,
  });

  const rateOption: SelectMenuItem = {
    label: '뿌리기 / MVP 쿠폰',
    key: RATE_NAME.MVP_COUPON,
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

export default MvpCoupon;
