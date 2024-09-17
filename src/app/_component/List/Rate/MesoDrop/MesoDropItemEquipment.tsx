'use client';

import RateInputListItemUI from '../UI/RateInputListItemUI';
import {
  mesoDropRateSelector,
  mesoDropRateState,
} from '@/app/atoms/mesoDropState';
import { REGEX } from '@/app/constants/constants';
import { RATE_NAME } from '@/app/constants/rate';
import useRateInput from '@/app/hooks/useRateInput';

const MesoDropItemEquipment = () => {
  const { value, handleRateChange } = useRateInput({
    rateSelector: mesoDropRateSelector,
    state: mesoDropRateState,
    rateName: RATE_NAME.ITEM_EQUIPMENT,
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 100,
  });

  const rateOption: RateInputOption = {
    label: '장착 아이템(메획)',
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

export default MesoDropItemEquipment;
