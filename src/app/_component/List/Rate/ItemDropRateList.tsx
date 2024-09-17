import RateGridUI from '../../Grid/RateGridUI';
import ItemDropAbility from './ItemDrop/ItemDropAbility';
import ItemDropEtc from './ItemDrop/ItemDropEtc';
import ItemDropHolySymbol from './ItemDrop/ItemDropHolySymbol';
import ItemDropItemEquipment from './ItemDrop/ItemDropItemEquipment';
import ItemDropPCRoom from './ItemDrop/ItemDropPCRoom';
import ItemDropShowDown from './ItemDrop/ItemDropShowDown';
import ItemDropTallahartSymbol from './ItemDrop/ItemDropTallahartSymbol';
import ItemDropUnionArtifact from './ItemDrop/ItemDropUnionArtifact';
import ItemDropWealthAcquisitionPotion from './ItemDrop/ItemDropWealthAcquisitionPotion';
import UnionLuckCoupon from './ItemDrop/UnionLuckCoupon';
import EmptyRateListItemUI from './UI/EmptyRateListItemUI';
import { listRGB } from '@/app/constants/color';

const ItemDropRateList = () => {
  const itemDropList: RateItem[] = [
    {
      label: '버프 아이템',
      Components: [
        UnionLuckCoupon,
        ItemDropWealthAcquisitionPotion,
        ItemDropPCRoom,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
      ],
      bgcolor: listRGB.blue,
    },
    {
      label: '착용 아이템',
      Components: [
        ItemDropItemEquipment,
        ItemDropTallahartSymbol,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
      ],
      bgcolor: listRGB.green,
    },
    {
      label: '유니온 / 스탯',
      Components: [
        ItemDropUnionArtifact,
        ItemDropAbility,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
      ],
      bgcolor: listRGB.orange,
    },
    {
      label: '스킬 관련 / 기타',
      Components: [
        ItemDropHolySymbol,
        ItemDropShowDown,
        ItemDropEtc,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
      ],
      bgcolor: listRGB.purple,
    },
  ];

  return <RateGridUI rateList={itemDropList} />;
};

export default ItemDropRateList;
