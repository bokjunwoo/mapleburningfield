'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const ElvenBlessing = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.ELVEN_BLESSING,
  });

  const rateOption: SelectMenuItem = {
    label: '엘프의 축복',
    key: RATE_NAME.ELVEN_BLESSING,
    items: [
      { value: 0, label: '미적용' },
      { value: 10, label: '1레벨 (+10%)' },
      { value: 15, label: '2레벨 (+15%)' },
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

export default ElvenBlessing;
