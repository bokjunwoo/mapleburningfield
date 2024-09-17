'use client';

import RateInputListItemUI from '../UI/RateInputListItemUI';
import {
  mesoDropRateSelector,
  mesoDropRateState,
} from '@/app/atoms/mesoDropState';
import { REGEX } from '@/app/constants/constants';
import { RATE_NAME } from '@/app/constants/rate';
import useRateInput from '@/app/hooks/useRateInput';

const MesoDropAbility = () => {
  const { value, handleRateChange } = useRateInput({
    rateSelector: mesoDropRateSelector,
    state: mesoDropRateState,
    rateName: RATE_NAME.ABILITY,
    regex: REGEX.NUMBER,
    maxAllowedValue: 20,
  });

  const rateOption: RateInputOption = {
    label: '어빌리티(메획)',
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

export default MesoDropAbility;
