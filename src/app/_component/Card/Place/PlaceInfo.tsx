import { Card, CardContent } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import MapTabUI from '../../Tab/UI/MapTabUI';
import BoosterCardUI from './UI/BoosterCardUI';
import EventSkillCardUI from './UI/EventSkillCardUI';
import MapInfoCardUI from './UI/MapInfoCardUI';
import PortalCardUI from './UI/PortalCardUI';
import useTab from '@/app/hooks/useTab';

const PlaceContent = ({ mapInfo }: MapInfoProps) => {
  const { value, handleChange } = useTab('맵 정보');

  const contents: TabItem[] = [
    { isEvent: false, label: '맵 정보' },
    { isEvent: false, label: '폴로 & 프리토' },
    { isEvent: true, label: 'VIP 부스터' },
    { isEvent: false, label: '이벤트 사냥스킬', isNew: true },
  ];

  return (
    <Card
      sx={{ bgcolor: blueGrey[800], px: 2, pt: 1.5, pb: 2, borderRadius: 2 }}
    >
      <CardContent sx={{ px: 0, pt: 0 }}>
        <MapTabUI
          value={value}
          handleChange={handleChange}
          contents={contents}
          fontSize={15}
        />
      </CardContent>

      {value === '맵 정보' && <MapInfoCardUI mapInfo={mapInfo} />}
      {value === '폴로 & 프리토' && <PortalCardUI mapInfo={mapInfo} />}
      {value === 'VIP 부스터' && <BoosterCardUI mapInfo={mapInfo} />}
      {value === '이벤트 사냥스킬' && <EventSkillCardUI mapInfo={mapInfo} />}
    </Card>
  );
};

export default PlaceContent;
