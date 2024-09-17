import { useEffect, useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import MonsterParkListUI from './UI/MonsterParkListUI';
import {
  expectedExpMultiplier,
  expectedExpRegionState,
} from '@/app/atoms/expectedExpState';
import { eventBuffExpContentState } from '@/app/atoms/expRateState';
import {
  EXTREME_DUNGEON_MIN_REGION_LEVEL,
  EXTREME_PARK_EXP,
  EXTREME_PARK_REGION,
  HIGH_END_DUNGEON_EXP,
  HIGH_END_DUNGEON_MIN_REGIONS_LEVEL,
  HIGH_END_DUNGEON_REGIONS,
} from '@/app/constants/exp/daily';
import { EXP_CONTENT } from '@/app/constants/rate';
import { calculateExpectedModifiedExp } from '@/app/utils/exp';

const MonsterPark = ({ characterLevel }: CharacterLevelProps) => {
  const setExpectedExpRegion = useSetRecoilState<
    ExpectedExpRegion<MonsterParkRegion>[]
  >(expectedExpRegionState(EXP_CONTENT.MONSTER_PARK));

  const eventBuffExpContentRate = useRecoilValue(eventBuffExpContentState);
  const expMultiplier = useRecoilValue(
    expectedExpMultiplier(EXP_CONTENT.MONSTER_PARK),
  );

  const accessibleHighEndDungeonRegions = HIGH_END_DUNGEON_REGIONS.filter(
    (region) => characterLevel >= HIGH_END_DUNGEON_MIN_REGIONS_LEVEL[region],
  );

  const highestLevelRegion =
    accessibleHighEndDungeonRegions[accessibleHighEndDungeonRegions.length - 1];

  const expectedExpHighEndDungeon: ExpectedExpRegion<MonsterParkRegion> =
    useMemo(() => {
      return {
        region: highestLevelRegion,
        exp: calculateExpectedModifiedExp(
          HIGH_END_DUNGEON_EXP[highestLevelRegion],
          eventBuffExpContentRate.monsterParkAdditionalExpRate,
          expMultiplier,
        ),
        count: 1,
        checked: true,
        warning: false,
      };
    }, [highestLevelRegion, eventBuffExpContentRate, expMultiplier]);

  const expectedExpExtremeDungeon: ExpectedExpRegion<MonsterParkRegion> =
    useMemo(() => {
      return {
        region: EXTREME_PARK_REGION,
        exp: calculateExpectedModifiedExp(
          EXTREME_PARK_EXP[characterLevel],
          eventBuffExpContentRate.monsterParkAdditionalExpRate,
          expMultiplier,
        ),
        count: 1,
        checked:
          characterLevel >=
          EXTREME_DUNGEON_MIN_REGION_LEVEL[EXTREME_PARK_REGION],
        warning: false,
      };
    }, [characterLevel, eventBuffExpContentRate, expMultiplier]);

  const monsterParkRegions = useMemo(() => {
    return characterLevel >= 260
      ? [expectedExpExtremeDungeon, expectedExpHighEndDungeon]
      : [expectedExpHighEndDungeon, expectedExpExtremeDungeon];
  }, [characterLevel, expectedExpExtremeDungeon, expectedExpHighEndDungeon]);

  useEffect(() => {
    setExpectedExpRegion(monsterParkRegions);
  }, [monsterParkRegions, setExpectedExpRegion]);

  return (
    <MonsterParkListUI
      title={EXP_CONTENT.MONSTER_PARK}
      characterLevel={characterLevel}
    />
  );
};

export default MonsterPark;
