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

  const extremeParkTotalExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.EXTREME_PARK),
  );

  const epicDungeonTotalExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.EPIC_DUNGEON),
  );

  const punchkingTotalExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.EVENT_PUNCHKING),
  );

  const VIPSaunaExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.VIP_SAUNA),
  );

  const azmothCanyonTotalExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.AZMOTH_CANYON),
  );

  const EXPCouponTotalExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.EXP_COUPON),
  );

  const goldenTomatoTotalExp = useRecoilValue(
    totalExpectedExpSelector(EXP_CONTENT.GOLDEN_TOMATO),
  );

  const totalExpectedExp =
    araneRiverDailyQuestTotalExp +
    araneRiverWeeklyQuestTotalExp +
    grandisDailyQuestTotalExp +
    monsterParkTotalExp +
    extremeParkTotalExp +
    epicDungeonTotalExp +
    punchkingTotalExp +
    VIPSaunaExp +
    azmothCanyonTotalExp +
    EXPCouponTotalExp +
    goldenTomatoTotalExp;

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
    extremeParkTotalExp,
    epicDungeonTotalExp,
    VIPSaunaExp,
    azmothCanyonTotalExp,
    EXPCouponTotalExp,
    goldenTomatoTotalExp,
    totalExpectedExp,
    level,
    remainingExp,
  };
};

export default useLevelProgress;
