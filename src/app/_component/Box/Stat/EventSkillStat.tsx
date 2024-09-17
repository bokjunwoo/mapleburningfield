import StatGridUI from '../../Grid/StatGridUI';
import useStatInfo from '@/app/hooks/useStatInfo';

const EventSkillStat = ({ mapInfo }: MapInfoProps) => {
  const { expInfo, burningFieldInfo, eventSkillRuneInfo } =
    useStatInfo(mapInfo);

  const statTextList: StatTextItem[] = [expInfo, burningFieldInfo];
  const statRadioList: StatRadioItem[] = [eventSkillRuneInfo];

  return (
    <StatGridUI statTextList={statTextList} statRadioList={statRadioList} />
  );
};

export default EventSkillStat;
