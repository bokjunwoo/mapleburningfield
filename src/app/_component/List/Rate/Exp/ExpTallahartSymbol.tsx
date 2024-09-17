import RateSelectListItemUI from '../UI/RateSelectListItemUI';
import { expRateState, expRateSelector } from '@/app/atoms/expRateState';
import { itemDropRateState } from '@/app/atoms/itemDropState';
import { mesoDropRateState } from '@/app/atoms/mesoDropState';
import {
  RATE_NAME,
  TALLAHART_SYMBOL_DROP_ITEMS,
  TALLAHART_SYMBOL_EXP_ITEMS,
} from '@/app/constants/rate';
import useRateSelectSync from '@/app/hooks/useRateSelectSync';

const ExpTallahartSymbol = () => {
  const { value, handleRateChange } = useRateSelectSync({
    rateSelector: expRateSelector,
    state: expRateState,
    rateName: RATE_NAME.TALLAHART_SYMBOL,
    syncStates: [mesoDropRateState, itemDropRateState],
    baseItem: TALLAHART_SYMBOL_EXP_ITEMS,
    syncItems: [TALLAHART_SYMBOL_DROP_ITEMS, TALLAHART_SYMBOL_DROP_ITEMS],
  });

  const rateOption: SelectMenuItem = {
    label: '탈라하트 심볼(경험치)',
    key: RATE_NAME.TALLAHART_SYMBOL,
    items: TALLAHART_SYMBOL_EXP_ITEMS,
  };

  return (
    <RateSelectListItemUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ExpTallahartSymbol;
