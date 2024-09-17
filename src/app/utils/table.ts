import {
  HIDDEN_ON_LARGE_SCREEN,
  HIDDEN_ON_XLARGE_SCREEN,
  HIDDEN_ON_MEDIUM_SCREEN,
  HIDDEN_ON_SMALL_SCREEN,
  HIDDEN_ON_XSMALL_SCREE,
} from '../constants/media';
import {
  calculateMobItemDropMultiplier,
  calculateSumOfMobs,
  calculateTotalMobExp,
  calculateTotalMobMeso,
  getUniqueMobLevels,
} from './mob';

export const generateHeadCells: (selectedTime: string) => HeadCell[] = (
  selectedTime,
) => [
  { id: 'map_region', label: '지역', disableSorting: true },
  { id: 'map_name', label: '사냥터' },
  {
    id: 'mob_levels',
    label: '몬스터 레벨',
    mediaQurey: HIDDEN_ON_XLARGE_SCREEN,
  },
  {
    id: 'total_number_of_mob',
    label: `젠수 / ${selectedTime} 최대 마릿수`,
    mediaQurey: HIDDEN_ON_SMALL_SCREEN,
  },
  {
    id: 'total_mob_exp',
    label: `${selectedTime} 최대 경험치`,
    mediaQurey: HIDDEN_ON_XSMALL_SCREE,
  },
  {
    id: 'total_mob_meso',
    label: `${selectedTime} 최대 메소`,
    disableSorting: true,
    mediaQurey: HIDDEN_ON_LARGE_SCREEN,
  },
  {
    id: 'burning_field',
    label: '버닝필드',
    disableSorting: true,
    mediaQurey: HIDDEN_ON_MEDIUM_SCREEN,
  },
];

export const mapInfoToHeadCell = ({
  mapInfo,
  characterLevel,
  expRate,
  itemDropRate,
  mesoDropRate,
  burningField,
}: MapInfoToHeadCellParams): MapInfo => {
  const mobLevels = getUniqueMobLevels(mapInfo.mobs);
  const totalNumberOfMob = calculateSumOfMobs(mapInfo.mobs);
  const itemDropMultiplier = calculateMobItemDropMultiplier(itemDropRate);

  const totalMobExp = calculateTotalMobExp({
    characterLevel,
    mobs: mapInfo.mobs,
    expRate: expRate + burningField,
  });
  const baseMobMeso = calculateTotalMobMeso(mapInfo.mobs, characterLevel);
  const pureMobMeso =
    baseMobMeso * calculateMobItemDropMultiplier(itemDropRate);
  const totalMobMeso: MobMeso = {
    pure: pureMobMeso,
    bonus: pureMobMeso * (mesoDropRate / 100) * itemDropMultiplier,
  };

  return {
    ...mapInfo,
    mob_levels: mobLevels,
    total_number_of_mob: totalNumberOfMob,
    total_mob_exp: totalMobExp,
    total_mob_meso: totalMobMeso,
    burning_field: burningField,
  };
};

export const sortByKey = <T>(
  array: T[],
  key: keyof T,
  order: 'asc' | 'desc',
): T[] => {
  return array.slice().sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];
    if (aValue < bValue) {
      return order === 'asc' ? -1 : 1;
    }
    return order === 'asc' ? 1 : -1;
  });
};
