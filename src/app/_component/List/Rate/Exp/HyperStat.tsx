'use client';

import RateInputListItemUI from '../UI/RateInputListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { REGEX } from '@/app/constants/constants';
import { RATE_NAME } from '@/app/constants/rate';
import useRateInput from '@/app/hooks/useRateInput';

const HyperStat = () => {
  const { value, handleRateChange } = useRateInput({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.HYPER_STAT,
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 10,
  });

  const rateOption: RateInputOption = {
    label: '하이퍼 스탯',
    key: RATE_NAME.HYPER_STAT,
  };

  return (
    <RateInputListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default HyperStat;
