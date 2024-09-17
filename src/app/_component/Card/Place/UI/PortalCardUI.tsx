import PlaceCardContentUI from '../common/PlaceCardContentUI';
import PortalStat from '@/app/_component/Box/Stat/PortalStat';
import PortalPolloTable from '@/app/_component/Table/Portal/PortalPolloTable';
import PortalPrittoTable from '@/app/_component/Table/Portal/PortalPrittoTable';
import PortalSpecialTable from '@/app/_component/Table/Portal/PortalSpecialTable';
import BannerTitle from '@/app/_component/Typography/BannerTitle';

const PortalCardUI = ({ mapInfo }: MapInfoProps) => {
  return (
    <PlaceCardContentUI>
      <BannerTitle text="적용된 스탯" />
      <PortalStat mapInfo={mapInfo} />

      <BannerTitle text="폴로 효율" />
      <PortalPolloTable mapInfo={mapInfo} />

      <BannerTitle text="프리토 효율" mt={2} />
      <PortalPrittoTable mapInfo={mapInfo} />

      <BannerTitle text="에스페시아 & 불꽃 늑대 효율" mt={2} />
      <PortalSpecialTable mapInfo={mapInfo} />
    </PlaceCardContentUI>
  );
};

export default PortalCardUI;
