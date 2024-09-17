'use client';

import RateInputListItemUI from '../UI/RateInputListItemUI';
import {
  itemDropRateSelector,
  itemDropRateState,
} from '@/app/atoms/itemDropState';
import { REGEX } from '@/app/constants/constants';
import { RATE_NAME } from '@/app/constants/rate';
import useRateInput from '@/app/hooks/useRateInput';

const ItemDropHolySymbol = () => {
  const { value, handleRateChange } = useRateInput({
    rateSelector: itemDropRateSelector,
    state: itemDropRateState,
    rateName: RATE_NAME.HOLY_SYMBOL,
    regex: REGEX.NUMBER,
    maxAllowedValue: 30,
  });

  const rateOption: RateInputOption = {
    label: '홀리 심볼(아드)',
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

export default ItemDropHolySymbol;
