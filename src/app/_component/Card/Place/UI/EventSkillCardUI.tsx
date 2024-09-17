import PlaceCardContentUI from '../common/PlaceCardContentUI';
import SkillInfoUI from '@/app/_component/Box/Skill/SkillInfoUI';
import EventSkillStat from '@/app/_component/Box/Stat/EventSkillStat';
import EventSkillTable from '@/app/_component/Table/MapContent/EventSkillTable';
import BannerTitle from '@/app/_component/Typography/BannerTitle';
import { EVENT_SKILL_INFO } from '@/app/constants/skill';

const EventSkillCardUI = ({ mapInfo }: MapInfoProps) => {
  return (
    <PlaceCardContentUI>
      <BannerTitle text="스킬 정보" />
      <SkillInfoUI mapInfo={mapInfo} skillInfo={EVENT_SKILL_INFO} />

      <BannerTitle text="적용된 스탯" />
      <EventSkillStat mapInfo={mapInfo} />

      <BannerTitle text="경험치 정보" />
      <EventSkillTable mapInfo={mapInfo} />
    </PlaceCardContentUI>
  );
};

export default EventSkillCardUI;
