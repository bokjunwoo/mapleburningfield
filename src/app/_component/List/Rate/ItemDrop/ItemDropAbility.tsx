'use client';

import RateInputListItemUI from '../UI/RateInputListItemUI';
import {
  itemDropRateSelector,
  itemDropRateState,
} from '@/app/atoms/itemDropState';
import { REGEX } from '@/app/constants/constants';
import { RATE_NAME } from '@/app/constants/rate';
import useRateInput from '@/app/hooks/useRateInput';

const ItemDropAbility = () => {
  const { value, handleRateChange } = useRateInput({
    rateSelector: itemDropRateSelector,
    state: itemDropRateState,
    rateName: RATE_NAME.ABILITY,
    regex: REGEX.NUMBER,
    maxAllowedValue: 20,
  });

  const rateOption: RateInputOption = {
    label: '어빌리티(아드)',
    key: RATE_NAME.ABILITY,
  };

  return (
    <RateInputListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ItemDropAbility;
