import { useEffect, useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import GoldenTomatoUI from './UI/GoldenTomatoUI';
import {
  expectedExpMultiplier,
  expectedExpRegionState,
} from '@/app/atoms/expectedExpState';
import { REGEX } from '@/app/constants/constants';
import { EXP_CONTENT } from '@/app/constants/rate';
import useValidatedInput from '@/app/hooks/useValidatedInput';
import { calculateGoldenTomato } from '@/app/utils/exp';

const GoldenTomato = ({ characterLevel }: CharacterLevelProps) => {
  const setExpectedExpRegion = useSetRecoilState<
    ExpectedExpRegion<GoldenTomatoRegion>[]
  >(expectedExpRegionState(EXP_CONTENT.GOLDEN_TOMATO));

  const expMultiplier = useRecoilValue(
    expectedExpMultiplier(EXP_CONTENT.GOLDEN_TOMATO),
  );

  const { value: inputValue, handleChange: handleInputChange } =
    useValidatedInput(REGEX.NUMBER, 1150);

  const goldenTomatoExp = calculateGoldenTomato(characterLevel, inputValue);

  const expectedExpRegionList: ExpectedExpRegion<GoldenTomatoRegion>[] =
    useMemo(() => {
      return [
        {
          region: '입장권 사용',
          exp: goldenTomatoExp,
          count: 1,
          checked: expMultiplier === '입장권 사용',
          warning: false,
        },
      ];
    }, [goldenTomatoExp, expMultiplier]);

  useEffect(() => {
    setExpectedExpRegion(expectedExpRegionList);
  }, [expectedExpRegionList, setExpectedExpRegion]);

  console.log(goldenTomatoExp.toLocaleString());

  return (
    <GoldenTomatoUI
      title={EXP_CONTENT.GOLDEN_TOMATO}
      characterLevel={characterLevel}
      inputValue={inputValue}
      handleInputChange={handleInputChange}
    />
  );
};

export default GoldenTomato;
