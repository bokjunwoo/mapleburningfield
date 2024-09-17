'use client';

import RateInputListItemUI from '../UI/RateInputListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { REGEX } from '@/app/constants/constants';
import { RATE_NAME } from '@/app/constants/rate';
import useRateInput from '@/app/hooks/useRateInput';

const ExpEtc = () => {
  const { value, handleRateChange } = useRateInput({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.ETC_EXP,
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 999,
  });

  const rateOption: RateInputOption = {
    label: '기타(경험치)',
    key: RATE_NAME.ETC_EXP,
  };

  return (
    <RateInputListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ExpEtc;
