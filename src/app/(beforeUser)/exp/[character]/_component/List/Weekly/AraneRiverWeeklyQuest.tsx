import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import WeeklyQuestListUI from './UI/WeeklyQuestListUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
import { totalExpRateSelector } from '@/app/atoms/expRateState';
import {
  ARANE_RIVER_WEEKLY_QUEST_EXP,
  ARANE_RIVER_WEEKLY_QUEST_MIN_REGIONS_LEVEL,
  ARANE_RIVER_WEEKLY_QUEST_REGIONS,
} from '@/app/constants/exp/weekly';
import { EXP_CONTENT } from '@/app/constants/rate';
import { expectedExpRegionList } from '@/app/utils/region';

const AraneRiverWeeklyQuest = ({ characterLevel }: CharacterLevelProps) => {
  const expRate = useRecoilValue(totalExpRateSelector);

  const setExpectedExpRegion = useSetRecoilState<
    ExpectedExpRegion<AraneRiverWeeklyQuestRegion>[]
  >(expectedExpRegionState(EXP_CONTENT.ARANE_RIVER_WEEKLY_QUEST));

  const obtainableRegions = ARANE_RIVER_WEEKLY_QUEST_REGIONS.filter(
    (region) =>
      characterLevel >= ARANE_RIVER_WEEKLY_QUEST_MIN_REGIONS_LEVEL[region],
  );

  const expectedExpAraneRiverList: ExpectedExpRegion<AraneRiverWeeklyQuestRegion>[] =
    expectedExpRegionList({
      regions: ARANE_RIVER_WEEKLY_QUEST_REGIONS,
      characterLevel,
      expRate,
      questExp: ARANE_RIVER_WEEKLY_QUEST_EXP,
      obtainableRegions,
    });

  useEffect(() => {
    setExpectedExpRegion(expectedExpAraneRiverList);
  }, [expectedExpAraneRiverList, setExpectedExpRegion]);

  return (
    <WeeklyQuestListUI
      title={EXP_CONTENT.ARANE_RIVER_WEEKLY_QUEST}
      characterLevel={characterLevel}
    />
  );
};

export default AraneRiverWeeklyQuest;
