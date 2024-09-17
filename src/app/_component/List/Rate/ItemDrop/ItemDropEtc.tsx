'use client';

import RateInputListItemUI from '../UI/RateInputListItemUI';
import {
  itemDropRateSelector,
  itemDropRateState,
} from '@/app/atoms/itemDropState';
import { REGEX } from '@/app/constants/constants';
import { RATE_NAME } from '@/app/constants/rate';
import useRateInput from '@/app/hooks/useRateInput';

const ItemDropEtc = () => {
  const { value, handleRateChange } = useRateInput({
    rateSelector: itemDropRateSelector,
    state: itemDropRateState,
    rateName: RATE_NAME.ETC_ITEM_DROP,
    regex: REGEX.NUMBER,
    maxAllowedValue: 400,
  });

  const rateOption: RateInputOption = {
    label: '기타(아드)',
    key: RATE_NAME.ETC_ITEM_DROP,
  };

  return (
    <RateInputListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ItemDropEtc;
