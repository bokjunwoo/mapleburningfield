'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import {
  presetExpRateStateSelector,
  presetExpRateState,
} from '@/app/atoms/presetRateState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const ExtremeGoldPotion = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: presetExpRateStateSelector,
    state: presetExpRateState,
    rateName: RATE_NAME.EXTREME_GOLD_POTION,
  });

  const rateOption: SelectMenuItem = {
    label: '익스트림 골드(몬파)',
    key: RATE_NAME.EXTREME_GOLD_POTION,
    items: [
      { value: 0, label: '미적용' },
      { value: 10, label: '적용 (+10%)' },
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

export default ExtremeGoldPotion;
