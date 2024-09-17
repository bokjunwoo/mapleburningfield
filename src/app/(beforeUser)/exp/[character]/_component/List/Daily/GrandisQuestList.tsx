import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import DailyQuestListUI from './UI/DailyQuestListUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
import { eventBuffExpContentState } from '@/app/atoms/expRateState';
import {
  GRANDIS_DAILY_QUEST_EXP,
  GRANDIS_DAILY_QUEST_MIN_REGIONS_LEVEL,
  GRANDIS_DAILY_QUEST_REGIONS,
} from '@/app/constants/exp/daily';
import { EXP_CONTENT } from '@/app/constants/rate';
import { calculateExpectedQuestTotalExp } from '@/app/utils/exp';

const GrandisQuestList = ({ characterLevel }: CharacterLevelProps) => {
  const setExpectedExpRegion = useSetRecoilState<
    ExpectedExpRegion<GrandisDailyQuestRegion>[]
  >(expectedExpRegionState(EXP_CONTENT.GRANDIS_DAILY_QUEST));

  const eventBuffExpContentRate = useRecoilValue(eventBuffExpContentState);

  const obtainableRegions = GRANDIS_DAILY_QUEST_REGIONS.filter(
    (region) => characterLevel >= GRANDIS_DAILY_QUEST_MIN_REGIONS_LEVEL[region],
  );

  const expectedExpRegionList: ExpectedExpRegion<GrandisDailyQuestRegion>[] =
    GRANDIS_DAILY_QUEST_REGIONS.map((region) => ({
      region,
      exp: calculateExpectedQuestTotalExp(
        GRANDIS_DAILY_QUEST_EXP[region],
        eventBuffExpContentRate.grandisAdditionalExpRate,
      ),
      count: 1,
      checked: obtainableRegions.includes(region),
      warning: false,
    }));

  useEffect(() => {
    setExpectedExpRegion(expectedExpRegionList);
  }, [setExpectedExpRegion, expectedExpRegionList]);

  return (
    <DailyQuestListUI
      title={EXP_CONTENT.GRANDIS_DAILY_QUEST}
      characterLevel={characterLevel}
      minRegionsLevel={GRANDIS_DAILY_QUEST_MIN_REGIONS_LEVEL}
    />
  );
};

export default GrandisQuestList;
