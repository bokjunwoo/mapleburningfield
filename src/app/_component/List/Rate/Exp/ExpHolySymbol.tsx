'use client';

import RateInputListItemUI from '../UI/RateInputListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { REGEX } from '@/app/constants/constants';
import { RATE_NAME } from '@/app/constants/rate';
import useRateInput from '@/app/hooks/useRateInput';

const ExpHolySymbol = () => {
  const { value, handleRateChange } = useRateInput({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.HOLY_SYMBOL,
    regex: REGEX.NUMBER,
    maxAllowedValue: 70,
  });

  const rateOption: RateInputOption = {
    label: '홀리 심볼(경험치)',
    key: RATE_NAME.HOLY_SYMBOL,
  };

  return (
    <RateInputListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ExpHolySymbol;
