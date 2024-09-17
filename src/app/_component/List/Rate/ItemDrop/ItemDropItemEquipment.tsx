'use client';

import RateInputListItemUI from '../UI/RateInputListItemUI';
import {
  itemDropRateSelector,
  itemDropRateState,
} from '@/app/atoms/itemDropState';
import { REGEX } from '@/app/constants/constants';
import { RATE_NAME } from '@/app/constants/rate';
import useRateInput from '@/app/hooks/useRateInput';

const ItemDropItemEquipment = () => {
  const { value, handleRateChange } = useRateInput({
    rateSelector: itemDropRateSelector,
    state: itemDropRateState,
    rateName: RATE_NAME.ITEM_EQUIPMENT,
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 200,
  });

  const rateOption: RateInputOption = {
    label: '장착 아이템(아드)',
    key: RATE_NAME.ITEM_EQUIPMENT,
  };

  return (
    <RateInputListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ItemDropItemEquipment;
