import MapContentTableUI from './UI/MapContentTableUI';
import { eventSkillRuneState } from '@/app/atoms/mapContentState';
import { EVENT_SKILL } from '@/app/constants/contents';
import useNumberSelect from '@/app/hooks/useNumberSelect';

const EventSkillTable = ({ mapInfo }: MapInfoProps) => {
  const [eventSkillCount, handleEventSkillChange] = useNumberSelect(
    EVENT_SKILL.ACTIVATION_COUNT,
  );

  const menuItems = Array.from(
    { length: EVENT_SKILL.ACTIVATION_COUNT },
    (_, i) => ({
      value: i + 1,
      label: `${i + 1}회`,
    }),
  );

  const menuItem: SelectMenuItem = {
    key: 'event_skill_select',
    label: 'event_skill_select',
    items: menuItems,
  };

  const selcectThItems: SelectThItem[] = [
    {
      label: '1회',
      selectedValue: 1,
    },
    {
      label: `${eventSkillCount}회`,
      selectedValue: eventSkillCount,
      menuItem,
      onCountChange: handleEventSkillChange,
    },
  ];

  const mobContent: MobContent = {
    runeState: eventSkillRuneState,
    cells: [
      {
        label: '룬 X',
        runeValue: 0,
        expMultiplier: 1,
        mobKillCount: EVENT_SKILL.INITIAL_MOB_KILL,
        isLevelProportional: true,
      },
      {
        label: '룬 2배',
        runeValue: 100,
        expMultiplier: 1,
        mobKillCount: EVENT_SKILL.INITIAL_MOB_KILL,
        isLevelProportional: true,
      },
    ],
  };

  return (
    <MapContentTableUI
      mapInfo={mapInfo}
      selcectThItems={selcectThItems}
      mobContent={mobContent}
    />
  );
};

export default EventSkillTable;
