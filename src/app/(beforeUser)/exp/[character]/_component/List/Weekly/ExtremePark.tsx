import { useEffect, useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import ExtremeParkListUI from './UI/ExtremeParkListUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
import { eventBuffExpContentState } from '@/app/atoms/expRateState';
import {
  EXTREME_DUNGEON_MIN_REGION_LEVEL,
  EXTREME_PARK_EXP,
  EXTREME_PARK_REGION,
} from '@/app/constants/exp/daily';
import { EXP_CONTENT } from '@/app/constants/rate';
import { calculateExpectedModifiedExp } from '@/app/utils/exp';

const ExtremePark = ({ characterLevel }: CharacterLevelProps) => {
  const setExpectedExpRegion = useSetRecoilState<
    ExpectedExpRegion<ExtremeParkRegion>[]
  >(expectedExpRegionState(EXP_CONTENT.EXTREME_PARK));

  const eventBuffExpContentRate = useRecoilValue(eventBuffExpContentState);

  const expectedExpExtremeDungeon: ExpectedExpRegion<ExtremeParkRegion> =
    useMemo(() => {
      return {
        region: EXTREME_PARK_REGION,
        exp: calculateExpectedModifiedExp(
          EXTREME_PARK_EXP[characterLevel],
          eventBuffExpContentRate.monsterParkAdditionalExpRate,
          400,
        ),
        count: 1,
        checked:
          characterLevel >=
          EXTREME_DUNGEON_MIN_REGION_LEVEL[EXTREME_PARK_REGION],
        warning: false,
      };
    }, [characterLevel, eventBuffExpContentRate.monsterParkAdditionalExpRate]);

  useEffect(() => {
    setExpectedExpRegion([expectedExpExtremeDungeon]);
  }, [expectedExpExtremeDungeon, setExpectedExpRegion]);

  return (
    <ExtremeParkListUI
      title={EXP_CONTENT.EXTREME_PARK}
      characterLevel={characterLevel}
    />
  );
};

export default ExtremePark;
