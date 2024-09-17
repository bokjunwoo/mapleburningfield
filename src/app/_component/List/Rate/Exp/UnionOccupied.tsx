'use client';

import RateInputListItemUI from '../UI/RateInputListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { REGEX } from '@/app/constants/constants';
import { RATE_NAME } from '@/app/constants/rate';
import useRateInput from '@/app/hooks/useRateInput';

const UnionOccupied = () => {
  const { value, handleRateChange } = useRateInput({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.UNION_OCCUPIED,
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 10,
  });

  const rateOption: RateInputOption = {
    label: '유니온 경험치칸 배치',
    key: RATE_NAME.UNION_OCCUPIED,
  };

  return (
    <RateInputListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default UnionOccupied;
