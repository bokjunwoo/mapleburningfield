import { useEffect, useMemo } from 'react';
import { useSetRecoilState } from 'recoil';
import ExtremeParkListUI from './UI/ExtremeParkListUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
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

  const expectedExpExtremeDungeon: ExpectedExpRegion<ExtremeParkRegion> =
    useMemo(() => {
      return {
        region: EXTREME_PARK_REGION,
        exp: calculateExpectedModifiedExp(
          EXTREME_PARK_EXP[characterLevel],
          400,
        ),
        count: 1,
        checked:
          characterLevel >=
          EXTREME_DUNGEON_MIN_REGION_LEVEL[EXTREME_PARK_REGION],
        warning: false,
      };
    }, [characterLevel]);

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
