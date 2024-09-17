'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const BoostRing = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.BOOST_RING,
  });

  const rateOption: SelectMenuItem = {
    label: '경험치 부스트 링',
    key: RATE_NAME.BOOST_RING,
    items: [
      { value: 0, label: '미적용' },
      { value: 15, label: '착용 (+15%)' },
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

export default BoostRing;
