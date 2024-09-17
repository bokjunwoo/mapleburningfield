import StatGridUI from '../../Grid/StatGridUI';
import useStatInfo from '@/app/hooks/useStatInfo';

const BoosterStat = ({ mapInfo }: MapInfoProps) => {
  const { expInfo, burningFieldInfo, boosterRuneInfo } = useStatInfo(mapInfo);

  const statTextList: StatTextItem[] = [expInfo, burningFieldInfo];
  const statRadioList: StatRadioItem[] = [boosterRuneInfo];

  return (
    <StatGridUI statTextList={statTextList} statRadioList={statRadioList} />
  );
};

export default BoosterStat;
