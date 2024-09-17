import PlaceCardContentUI from '../common/PlaceCardContentUI';
import SkillInfoUI from '@/app/_component/Box/Skill/SkillInfoUI';
import BoosterStat from '@/app/_component/Box/Stat/BoosterStat';
import BoosterTable from '@/app/_component/Table/MapContent/BoosterTable';
import BannerTitle from '@/app/_component/Typography/BannerTitle';
import { BOOSTER_INFO } from '@/app/constants/skill';

const BoosterCardUI = ({ mapInfo }: MapInfoProps) => {
  return (
    <PlaceCardContentUI>
      <BannerTitle text="아이템 정보" />
      <SkillInfoUI mapInfo={mapInfo} skillInfo={BOOSTER_INFO} />

      <BannerTitle text="적용된 스탯" />
      <BoosterStat mapInfo={mapInfo} />

      <BannerTitle text="경험치 정보" />
      <BoosterTable mapInfo={mapInfo} />
    </PlaceCardContentUI>
  );
};

export default BoosterCardUI;
