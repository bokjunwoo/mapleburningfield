import { Box } from '@mui/material';
import PlaceCardContentUI from '../common/PlaceCardContentUI';
import MobCalculateStat from '@/app/_component/Box/Stat/MobCalculateStat';
import MobInfoGridUI from '@/app/_component/Grid/MobInfoGridUI';
import MobCalculateTable from '@/app/_component/Table/MobCalculate/MobCalculateTable';
import BannerTitle from '@/app/_component/Typography/BannerTitle';

const MapInfoCardUI = ({ mapInfo }: MapInfoProps) => {
  return (
    <PlaceCardContentUI>
      <Box>
        <BannerTitle text="적용된 스탯" />
        <MobCalculateStat mapInfo={mapInfo} />
      </Box>

      <Box mb={2}>
        <BannerTitle text="맵 정보" />
        <MobCalculateTable mapInfo={mapInfo} />
      </Box>

      <Box>
        <BannerTitle text="몹 정보" />
        <MobInfoGridUI mapInfo={mapInfo} />
      </Box>
    </PlaceCardContentUI>
  );
};

export default MapInfoCardUI;
