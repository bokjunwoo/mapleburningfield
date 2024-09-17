import { useRecoilValue } from 'recoil';
import characterLevelState from '../atoms/characterLevelState';
import {
  runeExpRateSelector,
  sundayEventExpRateSelector,
  sundayEventExpEffectSelector,
  buffExpRateSelector,
} from '../atoms/portalState';
import { calculateExpPercentage, findHighestLevelMob } from '../utils/mob';
import {
  calculatePrittoExpMultiplier,
  calculateRemainingTime,
} from '../utils/portal';
import useExpReward from './useExpReward';
import useMobTotalRewards from './useMobTotalRewards';

type Props = {
  mapInfo: MapInfo;
  type: 'Pollo' | 'Pritto';
  expMultiplier: number;
  count: number;
};

const usePortalReward = ({ mapInfo, type, expMultiplier, count }: Props) => {
  const characterLevel = useRecoilValue(characterLevelState);
  const runeExpRate = useRecoilValue(runeExpRateSelector);
  const sundayEventExpRate = useRecoilValue(sundayEventExpRateSelector);
  const sundayEventExpEffect = useRecoilValue(sundayEventExpEffectSelector);
  const buffExpRate = useRecoilValue(buffExpRateSelector);

  const highestLevelMob = findHighestLevelMob(mapInfo.mobs);

  const expReward = useExpReward({
    mob: highestLevelMob,
    isLevelProportional: false,
    additionalExpRate: runeExpRate + sundayEventExpRate,
  });

  const { totalMobExp } = useMobTotalRewards({
    mapInfo,
    additionalExpRate: runeExpRate,
  });

  const expPolloReward = expReward * (expMultiplier + buffExpRate);
  const expPrittoReward =
    highestLevelMob.exp *
    (calculatePrittoExpMultiplier(expMultiplier, buffExpRate) *
      sundayEventExpEffect);

  const portalExpReward = type === 'Pollo' ? expPolloReward : expPrittoReward;

  const expPercentage = calculateExpPercentage(
    characterLevel,
    type === 'Pollo' ? expPolloReward : expPrittoReward,
  );

  const remainingTime = calculateRemainingTime({
    expReward: type === 'Pollo' ? expPolloReward : expPrittoReward,
    mobExp: totalMobExp,
    count,
  });

  return { portalExpReward, expPercentage, remainingTime };
};

export default usePortalReward;
