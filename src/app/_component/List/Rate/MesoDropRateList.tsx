import RateGridUI from '../../Grid/RateGridUI';
import Greed from './MesoDrop/Greed';
import MesoDropAbility from './MesoDrop/MesoDropAbility';
import MesoDropEtc from './MesoDrop/MesoDropEtc';
import MesoDropItemEquipment from './MesoDrop/MesoDropItemEquipment';
import MesoDropTallahartSymbol from './MesoDrop/MesoDropTallahartSymbol';
import MesoDropUnionArtifact from './MesoDrop/MesoDropUnionArtifact';
import MesoDropWealthAcquisitionPotion from './MesoDrop/MesoDropWealthAcquisitionPotion';
import UnionPhantom from './MesoDrop/UnionPhantom';
import UnionWealthCoupon from './MesoDrop/UnionWealthCoupon';
import EmptyRateListItemUI from './UI/EmptyRateListItemUI';
import { listRGB } from '@/app/constants/color';

const MesoDropRateList = () => {
  const mesoDropList: RateItem[] = [
    {
      label: '버프 아이템',
      Components: [
        UnionWealthCoupon,
        MesoDropWealthAcquisitionPotion,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
      ],
      bgcolor: listRGB.blue,
    },
    {
      label: '착용 아이템',
      Components: [
        MesoDropItemEquipment,
        MesoDropTallahartSymbol,
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
        MesoDropUnionArtifact,
        UnionPhantom,
        MesoDropAbility,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
      ],
      bgcolor: listRGB.orange,
    },
    {
      label: '스킬 관련 / 기타',
      Components: [
        Greed,
        MesoDropEtc,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
      ],
      bgcolor: listRGB.purple,
    },
  ];
  return <RateGridUI rateList={mesoDropList} />;
};

export default MesoDropRateList;
