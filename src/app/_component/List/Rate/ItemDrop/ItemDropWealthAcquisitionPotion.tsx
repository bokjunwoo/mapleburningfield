'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import {
  itemDropRateState,
  itemDropRateSelector,
} from '@/app/atoms/itemDropState';
import { mesoDropRateState } from '@/app/atoms/mesoDropState';
import { RATE_NAME } from '@/app/constants/rate';
import usePotionRateSelect from '@/app/hooks/usePotionRateSelect';

const ItemDropWealthAcquisitionPotion = () => {
  const { value, handleRateChange } = usePotionRateSelect({
    rateSelector: itemDropRateSelector,
    state: itemDropRateState,
    rateName: RATE_NAME.WEALTH_ACQUISITION_POTION,
    syncState: mesoDropRateState,
  });

  const rateOption: SelectMenuItem = {
    label: '재물 획득의 비약',
    key: RATE_NAME.WEALTH_ACQUISITION_POTION,
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

export default ItemDropWealthAcquisitionPotion;
