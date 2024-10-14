import { SelectChangeEvent } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import VIPSaunaUI from './UI/VIPSaunaUI';
import {
  expectedExpMultiplier,
  expectedExpRegionState,
} from '@/app/atoms/expectedExpState';
import { REGEX } from '@/app/constants/constants';
import { EXP_CONTENT } from '@/app/constants/rate';
import useValidatedInput from '@/app/hooks/useValidatedInput';
import { calculateEventMapExp } from '@/app/utils/exp';

const VIPSauna = ({ characterLevel }: CharacterLevelProps) => {
  const setExpectedExpRegion = useSetRecoilState<
    ExpectedExpRegion<VIPSaunaRegion>[]
  >(expectedExpRegionState(EXP_CONTENT.VIP_SAUNA));

  const expMultiplier = useRecoilValue(
    expectedExpMultiplier(EXP_CONTENT.VIP_SAUNA),
  );

  const [selectValue, setSelectValue] = useState<VIPSaunaUnit>('장');
  const {
    value: inputValue,
    setValue,
    handleChange: handleInputChange,
  } = useValidatedInput(REGEX.NUMBER, selectValue === '분' ? 720 : 10);

  const handleSelectChange = (event: SelectChangeEvent<VIPSaunaUnit>) => {
    setSelectValue(event.target.value as VIPSaunaUnit);
    setValue(0);
  };

  const eventMapExp = calculateEventMapExp(characterLevel);

  const calculateCountValue = (value: number, unit: VIPSaunaUnit): number =>
    unit === '장' ? value * 12 * 30 : value * 12;

  const countValue = calculateCountValue(inputValue, selectValue);

  const expectedExpRegionList: ExpectedExpRegion<VIPSaunaRegion>[] =
    useMemo(() => {
      return [
        {
          region: '이용권 사용',
          exp: eventMapExp.usedExp,
          count: countValue,
          checked: expMultiplier === '이용권 사용',
          warning: false,
        },
      ];
    }, [eventMapExp, expMultiplier, countValue]);

  useEffect(() => {
    setExpectedExpRegion(expectedExpRegionList);
  }, [expectedExpRegionList, setExpectedExpRegion]);

  return (
    <VIPSaunaUI
      title={EXP_CONTENT.VIP_SAUNA}
      characterLevel={characterLevel}
      selectValue={selectValue}
      inputValue={inputValue}
      handleSelectChange={handleSelectChange}
      handleInputChange={handleInputChange}
    />
  );
};

export default VIPSauna;
