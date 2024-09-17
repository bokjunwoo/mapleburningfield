import StatGridUI from '../../Grid/StatGridUI';
import useStatInfo from '@/app/hooks/useStatInfo';

const PortalStat = ({ mapInfo }: MapInfoProps) => {
  const {
    expInfo,
    portalRuneRateInfo,
    portalSundayEventRateInfo,
    portalEventBuffRateInfo,
  } = useStatInfo(mapInfo);

  const statTextList: StatTextItem[] = [expInfo];
  const statCheckboxList: StatCheckboxItem[] = [
    portalRuneRateInfo,
    portalSundayEventRateInfo,
  ];
  const statCountButtonList: StatCountButtonItem[] = [portalEventBuffRateInfo];

  return (
    <StatGridUI
      statTextList={statTextList}
      statCheckboxList={statCheckboxList}
      statCountButtonList={statCountButtonList}
    />
  );
};

export default PortalStat;
