'use client';

import RateInputListItemUI from '../UI/RateInputListItemUI';
import {
  itemDropRateSelector,
  itemDropRateState,
} from '@/app/atoms/itemDropState';
import { REGEX } from '@/app/constants/constants';
import { RATE_NAME } from '@/app/constants/rate';
import useRateInput from '@/app/hooks/useRateInput';

const ItemDropUnionArtifact = () => {
  const { value, handleRateChange } = useRateInput({
    rateSelector: itemDropRateSelector,
    state: itemDropRateState,
    rateName: RATE_NAME.UNION_ARTIFACT,
    regex: REGEX.NUMBER,
    maxAllowedValue: 12,
  });

  const rateOption: RateInputOption = {
    label: '유니온 아티팩트(아드)',
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

export default ItemDropUnionArtifact;
