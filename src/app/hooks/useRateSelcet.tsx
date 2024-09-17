import { SelectChangeEvent } from '@mui/material';
import { useState, useEffect } from 'react';
import {
  useRecoilValue,
  useRecoilState,
  RecoilState,
  RecoilValueReadOnly,
} from 'recoil';
import { handleRateChange as handleRateSelectChange } from '../utils/rate';

type Props = {
  rateSelector: (param: string) => RecoilValueReadOnly<string>;
  state: RecoilState<SelectItem[]>;
  rateName: string;
};

const useRateSelect = ({ rateSelector, state, rateName }: Props) => {
  const rateValue = useRecoilValue(rateSelector(rateName));

  const [rate, setRate] = useRecoilState(state);
  const [value, setValue] = useState<string>(rateValue);

  const handleRateChange = (event: SelectChangeEvent) => {
    const targetValue = event.target.value;

    handleRateSelectChange({
      rateItem: rate,
      rateName,
      targetValue,
      setValue,
      setRate,
    });
  };

  useEffect(() => {
    setValue(rateValue);
  }, [rateValue]);

  return { value, handleRateChange };
};

export default useRateSelect;
