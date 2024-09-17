import StatGridUI from '../../Grid/StatGridUI';
import useStatInfo from '@/app/hooks/useStatInfo';

const MobCalculateStat = ({ mapInfo }: MapInfoProps) => {
  const { expInfo, burningFieldInfo, itemDropInfo, mesoDropInfo } =
    useStatInfo(mapInfo);

  const statTextList: StatTextItem[] = [
    expInfo,
    burningFieldInfo,
    itemDropInfo,
    mesoDropInfo,
  ];

  return <StatGridUI statTextList={statTextList} />;
};

export default MobCalculateStat;
