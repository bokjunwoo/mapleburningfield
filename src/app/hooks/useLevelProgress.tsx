import { useRecoilValue } from 'recoil';
import { totalExpectedExpSelector } from '../atoms/expectedExpState';
import { REQUIRED_LEVEL_EXP } from '../constants/level';
import { EXP_CONTENT } from '../constants/rate';

const useLevelProgress = (initialLevel: number, initialExp: number) => {
  const araneRiverDailyQuestTotalExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.ARANE_RIVER_DAILY_QUEST),
  );

  const araneRiverWeeklyQuestTotalExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.ARANE_RIVER_WEEKLY_QUEST),
  );

  const grandisDailyQuestTotalExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.GRANDIS_DAILY_QUEST),
  );

  const monsterParkTotalExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.MONSTER_PARK),
  );

  const epicDungeonTotalExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.EPIC_DUNGEON),
  );

  const punchkingTotalExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.EVENT_PUNCHKING),
  );

  const eventMapExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.EVENT_MAP),
  );

  const totalExpectedExp =
    araneRiverDailyQuestTotalExp +
    araneRiverWeeklyQuestTotalExp +
    grandisDailyQuestTotalExp +
    monsterParkTotalExp +
    epicDungeonTotalExp +
    punchkingTotalExp +
    eventMapExp;

  let level = initialLevel;
  let remainingExp = initialExp + totalExpectedExp;
  let requiredExpForCurrentLevel = REQUIRED_LEVEL_EXP[level];

  while (remainingExp >= requiredExpForCurrentLevel) {
    remainingExp -= requiredExpForCurrentLevel;
    level += 1;
    requiredExpForCurrentLevel = REQUIRED_LEVEL_EXP[level];
  }

  return {
    araneRiverDailyQuestTotalExp,
    araneRiverWeeklyQuestTotalExp,
    grandisDailyQuestTotalExp,
    monsterParkTotalExp,
    epicDungeonTotalExp,
    eventMapExp,
    totalExpectedExp,
    level,
    remainingExp,
  };
};

export default useLevelProgress;
