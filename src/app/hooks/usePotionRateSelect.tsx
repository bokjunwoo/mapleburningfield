import { SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  RecoilState,
  RecoilValueReadOnly,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { handlePotionRateSelectChange } from '../utils/rate';

type Props = {
  rateSelector: (param: string) => RecoilValueReadOnly<string>;
  state: RecoilState<SelectItem[]>;
  rateName: string;
  syncState: RecoilState<SelectItem[]>;
};

const usePotionRateSelect = ({
  rateSelector,
  state,
  rateName,
  syncState,
}: Props) => {
  const rateValue = useRecoilValue(rateSelector(rateName));
  const syncSetState = useSetRecoilState(syncState);

  const [rate, setRate] = useRecoilState(state);
  const [value, setValue] = useState<string>(rateValue);

  const handleRateChange = (event: SelectChangeEvent) => {
    const targetValue = event.target.value;

    handlePotionRateSelectChange({
      rateItem: rate,
      rateName,
      targetValue,
      setValue,
      setRate,
      syncSetState,
    });
  };

  useEffect(() => {
    setValue(rateValue);
  }, [rateValue]);

  return { value, handleRateChange };
};

export default usePotionRateSelect;
