import { useEffect, useMemo } from 'react';
import { useSetRecoilState } from 'recoil';
import PunchkingEventUI from './UI/PunchkingEventUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
import { REGEX } from '@/app/constants/constants';
import { PUNCHKING_SCORE } from '@/app/constants/exp/event';
import { EXP_CONTENT } from '@/app/constants/rate';
import useValidatedInput from '@/app/hooks/useValidatedInput';
import { calculatePunchkingExp } from '@/app/utils/exp';

const PunchkingEvent = ({ characterLevel }: CharacterLevelProps) => {
  const setExpectedExpRegion = useSetRecoilState<
    ExpectedExpRegion<PunchkingScore>[]
  >(expectedExpRegionState(EXP_CONTENT.EVENT_PUNCHKING));

  const { value: inputValue, handleChange: handleInputChange } =
    useValidatedInput(REGEX.NUMBER, 2050);
  console.log(inputValue);

  const expectedExpInputRegion: ExpectedExpRegion<PunchkingScore> = useMemo(
    () => ({
      region: '직접입력',
      exp: calculatePunchkingExp({ characterLevel, score: inputValue }),
      count: 1,
      checked: true,
      warning: false,
    }),
    [characterLevel, inputValue],
  );

  console.log(expectedExpInputRegion);

  const expectedExpRegionList: ExpectedExpRegion<PunchkingScore>[] =
    PUNCHKING_SCORE.map((region) => ({
      region,
      exp: calculatePunchkingExp({
        characterLevel,
        score: Number(region),
      }),
      count: 1,
      checked: region === '직접입력',
      warning: false,
    }));

  const combinedExpectedExpRegions = useMemo(
    () => [expectedExpInputRegion, ...expectedExpRegionList],
    [expectedExpInputRegion, expectedExpRegionList],
  );

  useEffect(() => {
    setExpectedExpRegion(combinedExpectedExpRegions);
  }, [setExpectedExpRegion, combinedExpectedExpRegions]);

  return (
    <PunchkingEventUI
      title={EXP_CONTENT.EVENT_PUNCHKING}
      characterLevel={characterLevel}
      inputValue={inputValue}
      handleInputChange={handleInputChange}
    />
  );
};

export default PunchkingEvent;
