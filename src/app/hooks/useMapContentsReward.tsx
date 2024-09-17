import { useRecoilValue } from 'recoil';
import characterLevelState from '../atoms/characterLevelState';
import { findHighestLevelMob, calculateExpPercentage } from '../utils/mob';
import useExpReward from './useExpReward';

type Props = {
  mapInfo: MapInfo;
  item: MobContentCell;
  selectedValue: number;
};

const useMapContentReward = ({ mapInfo, item, selectedValue }: Props) => {
  const characterLevel = useRecoilValue(characterLevelState);

  const highestLevelMob = findHighestLevelMob(mapInfo.mobs);

  const expReward = useExpReward({
    mob: highestLevelMob,
    isLevelProportional: item.isLevelProportional,
    additionalExpRate: mapInfo.burning_field + item.runeValue,
  });

  const mapContentExpReward =
    expReward * item.mobKillCount * item.expMultiplier * selectedValue;

  const expPercentage = calculateExpPercentage(
    characterLevel,
    mapContentExpReward,
  );

  return { mapContentExpReward, expPercentage };
};

export default useMapContentReward;
