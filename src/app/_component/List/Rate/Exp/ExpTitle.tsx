'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const ExpTitle = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.EXP_TITLE,
  });

  const rateOption: SelectMenuItem = {
    label: '경험치 칭호',
    key: RATE_NAME.EXP_TITLE,
    items: [
      { value: 0, label: '미적용' },
      { value: 10, label: '착용 (+10%)' },
      { value: 20, label: '착용 (+20%)' },
      { value: 30, label: '착용 (+30%)' },
      { value: 40, label: '착용 (+40%)' },
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

export default ExpTitle;
