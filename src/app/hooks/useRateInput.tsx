import { SelectChangeEvent } from '@mui/material';
import { useState, useEffect } from 'react';
import {
  RecoilValueReadOnly,
  RecoilState,
  useRecoilValue,
  useRecoilState,
} from 'recoil';
import { handleRateInputChange } from '../utils/rate';

type Props = {
  rateSelector: (param: string) => RecoilValueReadOnly<string>;
  state: RecoilState<SelectItem[]>;
  rateName: string;
  regex: RegExp;
  maxAllowedValue: number;
};

const useRateInput = ({
  rateSelector,
  state,
  rateName,
  regex,
  maxAllowedValue,
}: Props) => {
  const rateValue = useRecoilValue(rateSelector(rateName));

  const [rate, setRate] = useRecoilState(state);
  const [value, setValue] = useState<string>(rateValue);

  const handleRateChange = (event: SelectChangeEvent) => {
    const targetValue = event.target.value;

    if (!Number(targetValue) && targetValue !== '' && Number(targetValue) !== 0)
      return;

    handleRateInputChange({
      rateItem: rate,
      rateName,
      targetValue,
      setValue,
      setRate,
      regex,
      maxAllowedValue,
    });
  };

  useEffect(() => {
    setValue(rateValue);
  }, [rateValue]);

  return { value, handleRateChange };
};

export default useRateInput;
