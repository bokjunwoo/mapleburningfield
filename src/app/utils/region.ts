import { DAILY_QUEST_ALL_REGIONS } from '../constants/exp/daily';
import { questMap } from '../data/map';
import { findNearestQuestRegion, getMobCount } from './exp';

export const expectedExpRegionList = <T extends ExpQuestContent>({
  regions,
  characterLevel,
  expRate,
  questExp,
  obtainableRegions,
}: ExpectedExpRegionListParams<T>) => {
  return regions.map((region) => {
    const nearestRegion = findNearestQuestRegion(
      characterLevel,
      DAILY_QUEST_ALL_REGIONS,
    );

    const mobExp = questMap[nearestRegion] * (expRate / 100);

    const isAfterFinalRegion =
      DAILY_QUEST_ALL_REGIONS.indexOf(region) >=
      DAILY_QUEST_ALL_REGIONS.indexOf(nearestRegion);

    const dailyQuestExpReward = questExp[region];

    const count = getMobCount(region);

    const mobKillExp = mobExp * count;

    const warning = isAfterFinalRegion
      ? false
      : dailyQuestExpReward < mobKillExp;

    const isChecked = obtainableRegions.includes(region) && !warning;

    return {
      region,
      exp: dailyQuestExpReward,
      count: 1,
      checked: isChecked,
      warning,
    };
  });
};
