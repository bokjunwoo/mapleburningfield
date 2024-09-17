import { useRecoilValue } from 'recoil';
import MapContentTableUI from './UI/MapContentTableUI';
import {
  boosterMobKillState,
  boosterRuneState,
} from '@/app/atoms/mapContentState';
import { BOOSTER } from '@/app/constants/contents';
import useNumberSelect from '@/app/hooks/useNumberSelect';

const BoosterTable = ({ mapInfo }: MapInfoProps) => {
  const mobKillCount = useRecoilValue(boosterMobKillState(mapInfo.map_name));

  const [boosterCount, handleBoosterChange] = useNumberSelect(
    BOOSTER.ACTIVATION_COUNT,
  );

  const menuItems = Array.from(
    { length: BOOSTER.ACTIVATION_COUNT },
    (_, i) => ({
      value: i + 1,
      label: `${i + 1}회`,
    }),
  );

  const menuItem: SelectMenuItem = {
    key: 'booster_select',
    label: 'booster_select',
    items: menuItems,
  };

  const selcectThItems: SelectThItem[] = [
    {
      label: '1회',
      selectedValue: 1,
    },
    {
      label: `${boosterCount}회`,
      selectedValue: boosterCount,
      menuItem,
      onCountChange: handleBoosterChange,
    },
  ];

  const mobContent: MobContent = {
    runeState: boosterRuneState,
    cells: [
      {
        label: '룬 2배',
        runeValue: 100,
        expMultiplier: 10,
        mobKillCount,
        isLevelProportional: false,
      },
      {
        label: '룬 3배',
        runeValue: 200,
        expMultiplier: 10,
        mobKillCount,
        isLevelProportional: false,
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

export default BoosterTable;
