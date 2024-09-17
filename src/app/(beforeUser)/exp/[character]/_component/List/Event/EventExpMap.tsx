import { SelectChangeEvent } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import EventExpMapUI from './UI/EventExpMapUI';
import {
  expectedExpMultiplier,
  expectedExpRegionState,
} from '@/app/atoms/expectedExpState';
import { REGEX } from '@/app/constants/constants';
import { EXP_CONTENT } from '@/app/constants/rate';
import useValidatedInput from '@/app/hooks/useValidatedInput';
import { calculateEventMapExp } from '@/app/utils/exp';

const EventExpMap = ({ characterLevel }: CharacterLevelProps) => {
  const setExpectedExpRegion = useSetRecoilState<
    ExpectedExpRegion<EventMapRegion>[]
  >(expectedExpRegionState(EXP_CONTENT.EVENT_MAP));

  const expMultiplier = useRecoilValue(
    expectedExpMultiplier(EXP_CONTENT.EVENT_MAP),
  );

  const [selectValue, setSelectValue] = useState<TimeUnit>('분');
  const {
    value: inputValue,
    setValue,
    handleChange: handleInputChange,
  } = useValidatedInput(REGEX.NUMBER, selectValue === '분' ? 720 : 72);

  const eventMapExp = calculateEventMapExp(characterLevel);

  const handleSelectChange = (event: SelectChangeEvent<TimeUnit>) => {
    setSelectValue(event.target.value as TimeUnit);
    setValue(0);
  };

  const calculateCountValue = (value: number, unit: TimeUnit): number =>
    unit === '시간' ? value * 12 * 60 : value * 12;

  const countValue = calculateCountValue(inputValue, selectValue);

  const expectedExpRegionList: ExpectedExpRegion<EventMapRegion>[] =
    useMemo(() => {
      return [
        {
          region: '햇살 사용',
          exp: eventMapExp.usedExp,
          count: countValue,
          checked: expMultiplier === '햇살 사용',
          warning: false,
        },
        {
          region: '햇살 미사용',
          exp: eventMapExp.unusedExp,
          count: countValue,
          checked: expMultiplier === '햇살 미사용',
          warning: false,
        },
      ];
    }, [eventMapExp, expMultiplier, countValue]);

  useEffect(() => {
    setExpectedExpRegion(expectedExpRegionList);
  }, [expectedExpRegionList, setExpectedExpRegion]);

  return (
    <EventExpMapUI
      title={EXP_CONTENT.EVENT_MAP}
      characterLevel={characterLevel}
      selectValue={selectValue}
      inputValue={inputValue}
      handleSelectChange={handleSelectChange}
      handleInputChange={handleInputChange}
    />
  );
};

export default EventExpMap;
