'use client';

import RateInputListItemUI from '../UI/RateInputListItemUI';
import {
  mesoDropRateSelector,
  mesoDropRateState,
} from '@/app/atoms/mesoDropState';
import { REGEX } from '@/app/constants/constants';
import { RATE_NAME } from '@/app/constants/rate';
import useRateInput from '@/app/hooks/useRateInput';

const MesoDropEtc = () => {
  const { value, handleRateChange } = useRateInput({
    rateSelector: mesoDropRateSelector,
    state: mesoDropRateState,
    rateName: RATE_NAME.ETC_MESO_DROP,
    regex: REGEX.NUMBER,
    maxAllowedValue: 300,
  });

  const rateOption: RateInputOption = {
    label: '기타(메획)',
    key: RATE_NAME.ETC_MESO_DROP,
  };

  return (
    <RateInputListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default MesoDropEtc;
