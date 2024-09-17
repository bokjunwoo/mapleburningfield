'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import {
  mesoDropRateSelector,
  mesoDropRateState,
} from '@/app/atoms/mesoDropState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const Greed = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: mesoDropRateSelector,
    state: mesoDropRateState,
    rateName: RATE_NAME.GREED,
  });

  const rateOption: SelectMenuItem = {
    label: '그리드(섀도어)',
    key: RATE_NAME.GREED,
    items: [
      { value: 0, label: '미적용' },
      { value: 20, label: '적용 (+20%)' },
    ],
  };

  return (
    <RateSelectListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default Greed;
