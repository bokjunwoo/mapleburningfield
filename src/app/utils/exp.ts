import {
  ARANE_RIVER_DAILY_QUEST_REGIONS,
  GRANDIS_DAILY_QUEST_REGIONS,
  EXTREME_PARK_EXP,
  HIGH_END_DUNGEON_EXP,
} from '../constants/exp/daily';
import { MOB_BASE_EXP } from '../constants/exp/event';
import { EPIC_DUNGEON_EXP } from '../constants/exp/weekly';
import { MIN_REGIONS_LEVEL } from '../constants/region';

export const filterValidRegions = <T extends AllExpContent>(
  selectedRegions: T[],
  validRegions: T[],
) => {
  return selectedRegions.filter((region) => validRegions.includes(region));
};

export const findNearestQuestRegion = <
  T extends ExpQuestContent | AraneRiverRegion | GrandisRegion,
>(
  userLevel: number,
  regions: T[],
): T => {
  return regions.reduce((nearestRegion, region) => {
    const regionLevel = MIN_REGIONS_LEVEL[region];
    const levelDifference = userLevel - regionLevel;

    if (
      regionLevel <= userLevel &&
      levelDifference < userLevel - MIN_REGIONS_LEVEL[nearestRegion]
    ) {
      return region;
    }

    return nearestRegion;
  }, regions[0]);
};

export const getMobCount = (region: ExpQuestContent): number => {
  if (
    ARANE_RIVER_DAILY_QUEST_REGIONS.includes(
      region as AraneRiverDailyQuestRegion,
    )
  ) {
    return 200;
  }

  if (GRANDIS_DAILY_QUEST_REGIONS.includes(region as GrandisDailyQuestRegion)) {
    return 500;
  }

  return 0;
};

export const calculateTotalExp = <T>({
  characterLevel,
  regions,
  questExp,
  minLevelData,
  additional = 0,
}: CalculateTotalExpParams<T>): number => {
  const totalExpReward = regions.reduce((total, region) => {
    const expReward = questExp[region];
    const isObtainable = characterLevel >= minLevelData[region];

    return isObtainable ? total + expReward * (1 + additional / 100) : total;
  }, 0);

  return totalExpReward;
};

export const calculateMonsterParkTotalExp = ({
  characterLevel,
  regions,
  expMultiplier,
}: CalculateMonsterParkTotalExpPercentageParams): number => {
  let total = 0;

  regions.forEach((region) => {
    if (region === '익스트림 몬스터파크') {
      const expReward =
        EXTREME_PARK_EXP[characterLevel] * Number(expMultiplier);
      total += expReward;
    } else {
      const expReward = HIGH_END_DUNGEON_EXP[region] * Number(expMultiplier);
      total += expReward;
    }
  });

  return total;
};

export const calculateEpicDungeonTotalExp = ({
  characterLevel,
  region,
  expMultiplier,
}: CalculateEpicDungeonTotalExpPercentageParams): number => {
  let total = 0;

  if (region === '하이마운틴') {
    total = EPIC_DUNGEON_EXP[characterLevel] * Number(expMultiplier);
  }

  if (region === '앵글러컴퍼니') {
    total = EPIC_DUNGEON_EXP[characterLevel] * 1.5 * Number(expMultiplier);
  }

  return total;
};

export const calculatePunchkingExp = ({
  characterLevel,
  score,
}: CalculatePunchkingExpPercentageParams): number => {
  const baseExp = MOB_BASE_EXP[characterLevel];
  const baseExp300 = baseExp * 300;

  if (score <= 150) {
    return baseExp300 * score * 2;
  }

  if (score > 150 && score <= 400) {
    const diff = score - 150;
    const additionalExp = diff * 0.8;
    const finalExp = 300 + additionalExp;
    return baseExp300 * finalExp;
  }

  if (score > 400 && score <= 1600) {
    const diff = score - 400;
    const additionalExp = diff * 0.25;
    const finalExp = 500 + additionalExp;
    return baseExp300 * finalExp;
  }

  if (score > 1600 && score <= 2000) {
    const diff = score - 1600;
    const additionalExp = diff * 1;
    const finalExp = 800 + additionalExp;
    return baseExp300 * finalExp;
  }

  if (score > 2000 && score <= 2050) {
    const diff = score - 2000;
    const additionalExp = diff * 5;
    const finalExp = 1200 + additionalExp;
    return baseExp300 * finalExp;
  }

  return 0;
};

export const calculateExpectedTotalExp = (
  data: ExpectedExpRegion<AllExpContent>[],
): number => {
  return data.reduce((total, item) => {
    if (item.checked) {
      const adjustedExp = item.exp * item.count;
      return total + adjustedExp;
    }
    return total;
  }, 0);
};

export const calculateExpectedQuestTotalExp = (
  exp: number,
  additionalExp: string | number = '0',
): number => {
  const adjustedAdditionalExp = (Number(additionalExp) + 100) / 100;

  const adjustedExp = exp * adjustedAdditionalExp;
  return adjustedExp;
};

export const calculateExpectedModifiedExp = (
  exp: number,
  additionalExp: string | number = 0,
  expMultiplier: string | number = 0,
): number => {
  const additionalExpValue = Number(additionalExp) || 0;
  const expMultiplierValue = Number(expMultiplier) || 0;

  const adjustedAdditionalExp = (additionalExpValue + 100) / 100;
  const adjustedExpMultiplier = (expMultiplierValue + 100) / 100;

  const baseExp = exp * adjustedAdditionalExp;
  const finalExp = baseExp * adjustedExpMultiplier;

  return finalExp;
};

export const calculateEventMapExp = (
  characterLevel: number,
): { usedExp: number; unusedExp: number } => {
  const baseExp = MOB_BASE_EXP[characterLevel];

  const expMultiplier = characterLevel >= 260 ? 126.6666666666 : 77.7777777777;
  const defaultMultiplier = 1.3;

  const usedExp = Math.ceil(baseExp * expMultiplier);
  const unusedExp = Math.ceil(baseExp * defaultMultiplier);

  return { usedExp, unusedExp };
};
