import { useRecoilValue } from 'recoil';
import characterLevelState from '../atoms/characterLevelState';
import { totalExpRateSelector } from '../atoms/expRateState';
import { totalItemDropRateSelector } from '../atoms/itemDropState';
import { totalMesoDropRateSelector } from '../atoms/mesoDropState';
import {
  calculateIndividualMesoMultiplier,
  calculateMobIndividualExpMultiplier,
  calculateMobItemDropMultiplier,
} from '../utils/mob';

type Props = {
  mob: MapMobInfo;
  additionalExpRate: number;
};

const useMobReward = ({ mob, additionalExpRate }: Props) => {
  const characterLevel = useRecoilValue(characterLevelState);
  const expRate = useRecoilValue(totalExpRateSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropRateSelector);
  const itemDropRate = useRecoilValue(totalItemDropRateSelector);

  const expMultiplier = calculateMobIndividualExpMultiplier(
    mob,
    characterLevel,
  );
  const mesoMultiplier = calculateIndividualMesoMultiplier(mob, characterLevel);
  const itemDropMultiplier = calculateMobItemDropMultiplier(itemDropRate);

  const mobExp = Math.floor(
    mob.exp * expMultiplier * ((expRate + additionalExpRate) / 100),
  );

  const baseMobMeso = Math.floor(
    mob.meso * mesoMultiplier * itemDropMultiplier,
  );

  const mobMeso: MobMeso = {
    pure: baseMobMeso,
    bonus: Math.floor(baseMobMeso * (mesoDropRate / 100) * itemDropMultiplier),
  };

  return {
    characterLevel,
    expRate,
    mesoDropRate,
    itemDropRate,
    expMultiplier,
    mesoMultiplier,
    mobExp,
    mobMeso,
  };
};

export default useMobReward;
