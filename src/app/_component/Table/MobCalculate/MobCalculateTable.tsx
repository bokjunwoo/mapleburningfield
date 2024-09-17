import { useRecoilValue } from 'recoil';
import MobCalculateTableUI from './UI/MobCalculateTableUI';
import characterLevelState from '@/app/atoms/characterLevelState';
import { mobKillsState } from '@/app/atoms/mobKillsState';
import useMobTotalRewards from '@/app/hooks/useMobTotalRewards';

const MobCalculateTable = ({ mapInfo }: MapInfoProps) => {
  const mobKills = useRecoilValue(mobKillsState(mapInfo.map_name));
  const characterLevel = useRecoilValue(characterLevelState);

  const { totalMobExp, totalMesoMob } = useMobTotalRewards({
    mapInfo,
    additionalExpRate: 0,
  });

  const headCells: MobCalculateHeadCell[] = [
    { label: '시간' },
    { label: '마릿수' },
    { label: '경험치' },
    { label: '메소' },
  ];

  return (
    <MobCalculateTableUI
      headCells={headCells}
      mobKills={mobKills}
      characterLevel={characterLevel}
      expReward={totalMobExp}
      mesoReward={totalMesoMob}
    />
  );
};

export default MobCalculateTable;
