import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import { expRateState } from '@/app/atoms/expRateState';
import {
  itemDropRateSelector,
  itemDropRateState,
} from '@/app/atoms/itemDropState';
import { mesoDropRateState } from '@/app/atoms/mesoDropState';
import {
  RATE_NAME,
  TALLAHART_SYMBOL_DROP_ITEMS,
  TALLAHART_SYMBOL_EXP_ITEMS,
} from '@/app/constants/rate';
import useRateSelectSync from '@/app/hooks/useRateSelectSync';

const ItemDropTallahartSymbol = () => {
  const { value, handleRateChange } = useRateSelectSync({
    rateSelector: itemDropRateSelector,
    state: itemDropRateState,
    rateName: RATE_NAME.TALLAHART_SYMBOL,
    syncStates: [expRateState, mesoDropRateState],
    baseItem: TALLAHART_SYMBOL_DROP_ITEMS,
    syncItems: [TALLAHART_SYMBOL_EXP_ITEMS, TALLAHART_SYMBOL_DROP_ITEMS],
  });

  const rateOption: SelectMenuItem = {
    label: '탈라하트 심볼(아드)',
    key: RATE_NAME.TALLAHART_SYMBOL,
    items: TALLAHART_SYMBOL_DROP_ITEMS,
  };

  return (
    <RateSelectListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ItemDropTallahartSymbol;
