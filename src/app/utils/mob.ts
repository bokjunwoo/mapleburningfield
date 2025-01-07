import { REQUIRED_LEVEL_EXP } from '../constants/level';
import { PER_MINUTE_SPAWN_COUNT } from '../constants/time';

export const calculateSumOfMobs = (mobs: MapMobInfo[]): number => {
  return mobs.reduce((total, mob) => total + mob.number_of_mob, 0);
};

export const getUniqueMobLevels = (mobs: MapMobInfo[]): number[] => {
  const levels = mobs.map((mob) => mob.level);

  const uniqueLevels = Array.from(new Set(levels));

  if (uniqueLevels.length === 1) {
    return [uniqueLevels[0]];
  }

  return uniqueLevels;
};

export const findHighestLevelMob = (mobs: MapMobInfo[]): MapMobInfo => {
  return mobs.reduce((prev, curr) => (prev.level > curr.level ? prev : curr));
};

// 경험치
export const calculateMobIndividualExpMultiplier = (
  mob: MapMobInfo,
  characterLevel: number,
): number => {
  const levelDifference = characterLevel - mob.level;

  let multiplier: number;

  if (levelDifference >= 40) {
    multiplier = 0.7; // 70%
  } else if (levelDifference >= 21) {
    multiplier = 0.7 + (levelDifference - 20) * 0.01; // 71% ~ 89%
  } else if (levelDifference >= 19) {
    multiplier = 0.95; // 95%
  } else if (levelDifference >= 17) {
    multiplier = 0.96; // 96%
  } else if (levelDifference >= 15) {
    multiplier = 0.97; // 97%
  } else if (levelDifference >= 13) {
    multiplier = 0.98; // 98%
  } else if (levelDifference >= 11) {
    multiplier = 0.99; // 99%
  } else if (levelDifference === 10) {
    multiplier = 1; // 100%
  } else if (levelDifference >= 5) {
    multiplier = 1.05; // 105%
  } else if (levelDifference >= 2) {
    multiplier = 1.1; // 110%
  } else if (levelDifference >= -1) {
    multiplier = 1.2; // 120%
  } else if (levelDifference >= -4) {
    multiplier = 1.1; // 110%
  } else if (levelDifference >= -9) {
    multiplier = 1.05; // 105%
  } else if (levelDifference >= -20) {
    multiplier = 1 + (levelDifference + 10) * 0.01; // 100% ~ 90%
  } else if (levelDifference >= -35) {
    multiplier = 0.7 + (levelDifference + 20) * 0.04; // 70% ~ 14%
  } else if (levelDifference >= -39) {
    multiplier = 0.1; // 10%
  } else {
    multiplier = 0; // 0%
  }

  return multiplier;
};

export const calculateMobsExpMultiplier = (
  mobs: MapMobInfo[],
  characterLevel: number,
): number[] => {
  return mobs.map((mob) =>
    calculateMobIndividualExpMultiplier(mob, characterLevel),
  );
};

export const calculateTotalMobExp = ({
  mobs,
  characterLevel,
  expRate,
}: CalculateTotalMobExpParams): number => {
  const expMultipliers = calculateMobsExpMultiplier(mobs, characterLevel);

  const scaledExps = mobs.map((mob, index) => mob.exp * expMultipliers[index]);

  const totalBaseMobExp = scaledExps
    .map((scaledExp, index) => scaledExp * mobs[index].number_of_mob)
    .reduce((total, current) => total + current, 0);

  const totalExpRateMobExp =
    (expRate / 100) * totalBaseMobExp * PER_MINUTE_SPAWN_COUNT;

  return Math.floor(totalExpRateMobExp);
};

export const calculateExpPercentage = (
  characterLevel: number,
  expReward: number,
): number => {
  const characterExp = REQUIRED_LEVEL_EXP[characterLevel];
  const expPercentage = (expReward / characterExp) * 100;
  return expPercentage;
};

// 메소
export const calculateIndividualMesoMultiplier = (
  mob: MapMobInfo,
  characterLevel: number,
): number => {
  const levelDifference = characterLevel - mob.level;

  let multiplier: number;

  if (levelDifference >= 30) {
    multiplier = 1;
  } else if (levelDifference >= 29) {
    multiplier = 0.97;
  } else if (levelDifference >= 28) {
    multiplier = 0.84;
  } else if (levelDifference >= 27) {
    multiplier = 0.76;
  } else if (levelDifference >= 26) {
    multiplier = 0.65;
  } else if (levelDifference >= 25) {
    multiplier = 0.55;
  } else if (levelDifference >= 24) {
    multiplier = 0.46;
  } else if (levelDifference >= 23) {
    multiplier = 0.38;
  } else if (levelDifference >= 22) {
    multiplier = 0.31;
  } else if (levelDifference >= 21) {
    multiplier = 0.25;
  } else if (levelDifference >= 20) {
    multiplier = 0.2;
  } else if (levelDifference >= 19) {
    multiplier = 0.18;
  } else if (levelDifference >= 18) {
    multiplier = 0.16;
  } else if (levelDifference >= 17) {
    multiplier = 0.14;
  } else if (levelDifference >= 16) {
    multiplier = 0.12;
  } else if (levelDifference >= 15) {
    multiplier = 0.1;
  } else if (levelDifference >= 14) {
    multiplier = 0.08;
  } else if (levelDifference >= 13) {
    multiplier = 0.06;
  } else if (levelDifference >= 12) {
    multiplier = 0.04;
  } else if (levelDifference >= 11) {
    multiplier = 0.02;
  } else if (levelDifference >= -10 && levelDifference <= 10) {
    multiplier = 0;
  } else if (levelDifference === -11) {
    multiplier = 0.03;
  } else if (levelDifference === -12) {
    multiplier = 0.06;
  } else if (levelDifference === -13) {
    multiplier = 0.09;
  } else if (levelDifference === -14) {
    multiplier = 0.12;
  } else if (levelDifference === -15) {
    multiplier = 0.15;
  } else if (levelDifference === -16) {
    multiplier = 0.18;
  } else if (levelDifference === -17) {
    multiplier = 0.21;
  } else if (levelDifference === -18) {
    multiplier = 0.24;
  } else if (levelDifference === -19) {
    multiplier = 0.27;
  } else if (levelDifference === -20) {
    multiplier = 0.3;
  } else if (levelDifference === -21) {
    multiplier = 0.35;
  } else if (levelDifference === -22) {
    multiplier = 0.4;
  } else if (levelDifference === -23) {
    multiplier = 0.45;
  } else if (levelDifference === -24) {
    multiplier = 0.5;
  } else if (levelDifference === -25) {
    multiplier = 0.55;
  } else if (levelDifference === -26) {
    multiplier = 0.6;
  } else if (levelDifference === -27) {
    multiplier = 0.65;
  } else if (levelDifference === -28) {
    multiplier = 0.7;
  } else if (levelDifference === -29) {
    multiplier = 0.75;
  } else if (levelDifference === -30) {
    multiplier = 0.8;
  } else if (levelDifference === -31) {
    multiplier = 0.85;
  } else if (levelDifference === -32) {
    multiplier = 0.9;
  } else if (levelDifference === -33) {
    multiplier = 0.95;
  } else {
    multiplier = 1;
  }

  return 1 - multiplier;
};

export const calculateMobsMesoMultiplier = (
  characterLevel: number,
  mobs: MapMobInfo[],
): number[] => {
  return mobs.map((mob) =>
    calculateIndividualMesoMultiplier(mob, characterLevel),
  );
};

export const calculateTotalMobMeso = (
  mobs: MapMobInfo[],
  characterLevel: number,
): number => {
  const multipliers = calculateMobsMesoMultiplier(characterLevel, mobs);

  const scaledMesos: number[] = mobs.map(
    (mob, index) => mob.meso * multipliers[index],
  );

  const totalBaseMeso = scaledMesos
    .map((scaledMeso, index) => scaledMeso * mobs[index].number_of_mob)
    .reduce((total, current) => total + current, 0);

  const totalMesoDropRateMobMeso = totalBaseMeso * PER_MINUTE_SPAWN_COUNT;

  return Math.floor(totalMesoDropRateMobMeso);
};

// 드랍
export const calculateMobItemDropMultiplier = (
  itemDropRate: number,
): number => {
  const itemDropRatio = itemDropRate / 100;
  if (itemDropRatio >= 0.67) {
    return 1;
  }
  return (60 * itemDropRatio + 60) / 100;
};
