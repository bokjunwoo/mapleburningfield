import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import EpicDungeonListUI from './UI/EpicDungeonListUI';
import {
  expectedExpMultiplier,
  expectedExpRegionState,
} from '@/app/atoms/expectedExpState';
import {
  EPIC_DUNGEON_EXP,
  EPIC_DUNGEON_MIN_REGIONS_LEVEL,
  EPIC_DUNGEON_REGIONS,
} from '@/app/constants/exp/weekly';
import { EXP_CONTENT } from '@/app/constants/rate';
import { calculateExpectedModifiedExp } from '@/app/utils/exp';

const EpicDungeon = ({ characterLevel }: CharacterLevelProps) => {
  const setExpectedExpRegion = useSetRecoilState<
    ExpectedExpRegion<EpicDungeonRegion>[]
  >(expectedExpRegionState(EXP_CONTENT.EPIC_DUNGEON));

  const expMultiplier = useRecoilValue(
    expectedExpMultiplier(EXP_CONTENT.EPIC_DUNGEON),
  );

  const obtainableRegions = EPIC_DUNGEON_REGIONS.filter(
    (region) => characterLevel >= EPIC_DUNGEON_MIN_REGIONS_LEVEL[region],
  );

  const expectedExpRegionList: ExpectedExpRegion<EpicDungeonRegion>[] =
    EPIC_DUNGEON_REGIONS.map((region) => ({
      region,
      exp: calculateExpectedModifiedExp(
        region === '하이마운틴'
          ? EPIC_DUNGEON_EXP[characterLevel]
          : EPIC_DUNGEON_EXP[characterLevel] * 1.5,
        0,
        expMultiplier,
      ),
      count: 1,
      checked: region === obtainableRegions[obtainableRegions.length - 1],
      warning: false,
    }));

  const reversedRegions =
    characterLevel >= 270
      ? [...expectedExpRegionList].reverse()
      : expectedExpRegionList;

  useEffect(() => {
    setExpectedExpRegion(reversedRegions);
  }, [setExpectedExpRegion, expectedExpRegionList, reversedRegions]);

  return (
    <EpicDungeonListUI
      title={EXP_CONTENT.EPIC_DUNGEON}
      characterLevel={characterLevel}
    />
  );
};

export default EpicDungeon;
