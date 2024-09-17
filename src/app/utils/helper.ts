import { MIN_REGIONS_LEVEL } from '../constants/region';

export const mergeRates = (
  currentRates: SelectItem[],
  newRates: SelectItem[],
): SelectItem[] => {
  const rateMap = new Map<string, SelectItem>();

  currentRates.forEach((rate) => rateMap.set(rate.label, rate));
  newRates.forEach((rate) => rateMap.set(rate.label, rate));

  return Array.from(rateMap.values());
};

export const isAreaAccessible = (
  region: GrandisRegion | AraneRiverRegion,
  characterLevel: number,
): boolean => {
  const minLevel = MIN_REGIONS_LEVEL[region];

  return characterLevel >= minLevel;
};
