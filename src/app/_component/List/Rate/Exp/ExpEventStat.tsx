'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { RATE_NAME } from '@/app/constants/rate';
import { EVENT_BUFF_SKILL_NAME } from '@/app/constants/skill';
import useRateSelect from '@/app/hooks/useRateSelcet';

const ExpEventStat = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.EXP_EVENT_STAT,
  });

  const rateOption: SelectMenuItem = {
    label: `${EVENT_BUFF_SKILL_NAME}(마약)`,
    key: RATE_NAME.EXP_EVENT_STAT,
    items: [
      { value: 0, label: '미적용' },
      { value: 2.5, label: '1레벨 (+2.5%)' },
      { value: 5, label: '2레벨 (+5%)' },
      { value: 7.5, label: '3레벨 (+7.5%)' },
      { value: 10, label: '4레벨 (+10%)' },
      { value: 12.5, label: '5레벨 (+12.5%)' },
      { value: 15, label: '6레벨 (+15%)' },
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

export default ExpEventStat;
