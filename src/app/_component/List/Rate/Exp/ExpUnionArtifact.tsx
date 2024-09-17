'use client';

import RateInputListItemUI from '../UI/RateInputListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { REGEX } from '@/app/constants/constants';
import { RATE_NAME } from '@/app/constants/rate';
import useRateInput from '@/app/hooks/useRateInput';

const ExpUnionArtifact = () => {
  const { value, handleRateChange } = useRateInput({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.UNION_ARTIFACT,
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 12,
  });

  const rateOption: RateInputOption = {
    label: '아티팩트(경험치)',
    key: RATE_NAME.UNION_ARTIFACT,
  };

  return (
    <RateInputListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ExpUnionArtifact;
