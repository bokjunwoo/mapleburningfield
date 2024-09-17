'use client';

import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import { expRateState } from '@/app/atoms/expRateState';
import {
  itemDropRateState,
  itemDropRateSelector,
} from '@/app/atoms/itemDropState';
import {
  PC_ROOM_DROP_ITEMS,
  PC_ROOM_EXP_ITEMS,
  RATE_NAME,
} from '@/app/constants/rate';
import useRateSelectSync from '@/app/hooks/useRateSelectSync';

const ItemDropPCRoom = () => {
  const { value, handleRateChange } = useRateSelectSync({
    rateSelector: itemDropRateSelector,
    state: itemDropRateState,
    rateName: RATE_NAME.PC_ROOM,
    syncStates: [expRateState],
    baseItem: PC_ROOM_DROP_ITEMS,
    syncItems: [PC_ROOM_EXP_ITEMS],
  });

  const rateOption: SelectMenuItem = {
    label: '프리미엄 PC방',
    key: RATE_NAME.PC_ROOM,
    items: PC_ROOM_DROP_ITEMS,
  };

  return (
    <RateSelectListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ItemDropPCRoom;
