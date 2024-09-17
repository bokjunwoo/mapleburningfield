'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const KinshipRing = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.KINSHIP_RING,
  });

  const rateOption: SelectMenuItem = {
    label: '혈맹의 반지',
    key: RATE_NAME.KINSHIP_RING,
    items: [
      { value: 0, label: '미적용' },
      { value: 10, label: '착용 (+10%)' },
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

export default KinshipRing;
