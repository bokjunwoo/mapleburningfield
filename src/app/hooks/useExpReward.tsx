import { useRecoilValue } from 'recoil';
import characterLevelState from '../atoms/characterLevelState';
import { totalExpRateSelector } from '../atoms/expRateState';
import { calculateMobIndividualExpMultiplier } from '../utils/mob';

type Props = {
  mob: MapMobInfo;
  isLevelProportional: boolean;
  additionalExpRate: number;
};

const useExpReward = ({
  mob,
  isLevelProportional,
  additionalExpRate,
}: Props) => {
  const characterLevel = useRecoilValue(characterLevelState);
  const expRate = useRecoilValue(totalExpRateSelector);

  const mobLevelMultiplier = calculateMobIndividualExpMultiplier(
    mob,
    characterLevel,
  );

  const mobExpMultiplier = isLevelProportional
    ? Math.floor(mob.exp * mobLevelMultiplier)
    : mob.exp;

  const totalExpRate = (expRate + additionalExpRate) / 100;

  const expReward = Math.floor(mobExpMultiplier * totalExpRate);

  return expReward;
};

export default useExpReward;
