import { SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  RecoilState,
  RecoilValueReadOnly,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { handleSyncSetStateSelectChange } from '../utils/rate';

type Props = {
  rateSelector: (param: string) => RecoilValueReadOnly<string>;
  state: RecoilState<SelectItem[]>;
  rateName: string;
  syncStates: RecoilState<SelectItem[]>[];
  baseItem: SelectItem[];
  syncItems: SelectItem[][];
};

const useRateSelectSync = ({
  rateSelector,
  state,
  rateName,
  syncStates,
  baseItem,
  syncItems,
}: Props) => {
  const rateValue = useRecoilValue(rateSelector(rateName));

  const syncSetStates = syncStates.map((recoilState) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSetRecoilState(recoilState),
  );

  const [rate, setRate] = useRecoilState(state);
  const [value, setValue] = useState<string>(rateValue);

  const handleRateChange = (event: SelectChangeEvent<string>) => {
    const targetValue = event.target.value;
    const selectedItem = baseItem.find(
      (item) => item.value === Number(targetValue),
    );

    if (selectedItem && selectedItem.id) {
      handleSyncSetStateSelectChange({
        rateItem: rate,
        rateName,
        targetValue,
        setValue,
        setRate,
        syncSetStates,
        syncItems,
        itemId: selectedItem.id,
      });
    }
  };

  useEffect(() => {
    setValue(rateValue);
  }, [rateValue]);

  return { value, handleRateChange };
};

export default useRateSelectSync;
