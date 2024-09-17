import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import DailyQuestListUI from './UI/DailyQuestListUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
import { totalExpRateSelector } from '@/app/atoms/expRateState';
import {
  ARANE_RIVER_DAILY_QUEST_EXP,
  ARANE_RIVER_DAILY_QUEST_MIN_REGIONS_LEVEL,
  ARANE_RIVER_DAILY_QUEST_REGIONS,
} from '@/app/constants/exp/daily';
import { EXP_CONTENT } from '@/app/constants/rate';
import { expectedExpRegionList } from '@/app/utils/region';

const AraneRiverQuest = ({ characterLevel }: CharacterLevelProps) => {
  const expRate = useRecoilValue(totalExpRateSelector);

  const setExpectedExpRegion = useSetRecoilState(
    expectedExpRegionState(EXP_CONTENT.ARANE_RIVER_DAILY_QUEST),
  );

  const obtainableRegions = ARANE_RIVER_DAILY_QUEST_REGIONS.filter(
    (region) =>
      characterLevel >= ARANE_RIVER_DAILY_QUEST_MIN_REGIONS_LEVEL[region],
  );

  const expectedExpAraneRiverList = expectedExpRegionList({
    regions: ARANE_RIVER_DAILY_QUEST_REGIONS,
    characterLevel,
    expRate,
    questExp: ARANE_RIVER_DAILY_QUEST_EXP,
    obtainableRegions,
  });

  useEffect(() => {
    setExpectedExpRegion(expectedExpAraneRiverList);
  }, [setExpectedExpRegion, expectedExpAraneRiverList]);

  return (
    <DailyQuestListUI
      title={EXP_CONTENT.ARANE_RIVER_DAILY_QUEST}
      characterLevel={characterLevel}
      minRegionsLevel={ARANE_RIVER_DAILY_QUEST_MIN_REGIONS_LEVEL}
    />
  );
};

export default AraneRiverQuest;
