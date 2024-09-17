import { useRecoilValue } from 'recoil';
import characterLevelState from '../atoms/characterLevelState';
import { totalExpRateSelector } from '../atoms/expRateState';
import { totalItemDropRateSelector } from '../atoms/itemDropState';
import { totalMesoDropRateSelector } from '../atoms/mesoDropState';
import { mobKillsState } from '../atoms/mobKillsState';
import {
  calculateMobItemDropMultiplier,
  calculateTotalMobExp,
  calculateTotalMobMeso,
} from '../utils/mob';

type Props = {
  mapInfo: MapInfo;
  additionalExpRate: number;
};

const useMobTotalRewards = ({ mapInfo, additionalExpRate }: Props) => {
  const characterLevel = useRecoilValue(characterLevelState);
  const expRate = useRecoilValue(totalExpRateSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropRateSelector);
  const itemDropRate = useRecoilValue(totalItemDropRateSelector);
  const mobKills = useRecoilValue(mobKillsState(mapInfo.map_name));

  const itemDropMultiplier = calculateMobItemDropMultiplier(itemDropRate);

  const mobRatio = mobKills / mapInfo.total_number_of_mob;

  const mobExp = calculateTotalMobExp({
    mobs: mapInfo.mobs,
    characterLevel,
    expRate: expRate + additionalExpRate + mapInfo.burning_field,
  });

  const baseMobMeso =
    calculateTotalMobMeso(mapInfo.mobs, characterLevel) * mobRatio;
  const pureMobMeso =
    baseMobMeso * calculateMobItemDropMultiplier(itemDropRate);

  const totalMobExp = mobExp * mobRatio;
  const totalMesoMob: MobMeso = {
    pure: pureMobMeso,
    bonus: pureMobMeso * (mesoDropRate / 100) * itemDropMultiplier,
  };

  return { totalMobExp, totalMesoMob };
};

export default useMobTotalRewards;
