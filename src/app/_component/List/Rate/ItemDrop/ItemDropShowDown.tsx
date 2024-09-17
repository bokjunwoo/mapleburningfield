'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import {
  itemDropRateState,
  itemDropRateSelector,
} from '@/app/atoms/itemDropState';
import { RATE_NAME } from '@/app/constants/rate';
import useRateSelect from '@/app/hooks/useRateSelcet';

const ItemDropShowDown = () => {
  const { value, handleRateChange } = useRateSelect({
    rateSelector: itemDropRateSelector,
    state: itemDropRateState,
    rateName: RATE_NAME.SHOW_DOWN,
  });

  const rateOption: SelectMenuItem = {
    label: '쇼다운 챌린지(나로)',
    key: RATE_NAME.SHOW_DOWN,
    items: [
      { value: 0, label: '미적용' },
      { value: 5, label: '기본 (+5%)' },
      { value: 10, label: '하이퍼 스킬 (+10%)' },
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

export default ItemDropShowDown;
