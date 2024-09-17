import { Card } from '@mui/material';
import BurningFieldCardContentUI from './BurningFieldCardContentUI';
import MobKillInputCardContentUI from './MobKillInputCardContentUI';

const MapSettingCardUI = ({ mapInfo }: MapInfoProps) => {
  return (
    <Card>
      <BurningFieldCardContentUI mapName={mapInfo.map_name} />
      <MobKillInputCardContentUI mapInfo={mapInfo} />
    </Card>
  );
};

export default MapSettingCardUI;
