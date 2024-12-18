import { useEffect, useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import MonsterParkListUI from './UI/MonsterParkListUI';
import {
  expectedExpMultiplier,
  expectedExpRegionState,
} from '@/app/atoms/expectedExpState';
import { eventBuffExpContentState } from '@/app/atoms/expRateState';
import {
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

  useEffect(() => {
    setExpectedExpRegion([expectedExpHighEndDungeon]);
  }, [expectedExpHighEndDungeon, setExpectedExpRegion]);

  return (
    <MonsterParkListUI
      title={EXP_CONTENT.MONSTER_PARK}
      characterLevel={characterLevel}
    />
  );
};

export default MonsterPark;
