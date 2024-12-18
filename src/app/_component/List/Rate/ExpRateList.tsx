import RateGridUI from '../../Grid/RateGridUI';
import AccumulationPotion from './Exp/AccumulationPotion';
import AzmothPotion from './Exp/AzmothPotion';
import BoostRing from './Exp/BoostRing';
import EventWorld from './Exp/EventWorld';
import ElvenBlessing from './Exp/ElvenBlessing';
import ExpCoupon from './Exp/ExpCoupon';
import ExpEtc from './Exp/ExpEtc';
import ExpEventStat from './Exp/ExpEventStat';
import ExpHolySymbol from './Exp/ExpHolySymbol';
import ExpPcRoom from './Exp/ExpPCroom';
import ExpShowDown from './Exp/ExpShowDown';
import ExpTallahartSymbol from './Exp/ExpTallahartSymbol';
import ExpTitle from './Exp/ExpTitle';
import ExpUnionArtifact from './Exp/ExpUnionArtifact';
import ExtremeGoldPotion from './Exp/ExtremeGoldPotion';
import HyperStat from './Exp/HyperStat';
import KinshipRing from './Exp/KinshipRing';
import LoadedDice from './Exp/LoadedDice';
import MvpCoupon from './Exp/MvpCoupon';
import SolJanus from './Exp/SolJanus';
import SpiritPendant from './Exp/SpiritPendant';
import UnionOccupied from './Exp/UnionOccupied';
import UnionZero from './Exp/UnionZero';
import VIPCoupon from './Exp/VIPCoupon';
import EmptyRateListItemUI from './UI/EmptyRateListItemUI';
import { listRGB } from '@/app/constants/color';

const ExpRateList = () => {
  const expList: RateItem[] = [
    {
      label: '버프 아이템',
      Components: [
        ExpCoupon,
        MvpCoupon,
        ExtremeGoldPotion,
        AccumulationPotion,
        VIPCoupon,
        AzmothPotion,
        ExpPcRoom,
      ],
      bgcolor: listRGB.blue,
    },
    {
      label: '착용 아이템',
      Components: [
        SpiritPendant,
        BoostRing,
        KinshipRing,
        ExpTitle,
        ExpTallahartSymbol,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
      ],
      bgcolor: listRGB.green,
    },
    {
      label: '유니온 / 스탯 / 링크',
      Components: [
        ExpUnionArtifact,
        UnionOccupied,
        UnionZero,
        HyperStat,
        ElvenBlessing,
        EmptyRateListItemUI,
        EmptyRateListItemUI,
      ],
      bgcolor: listRGB.orange,
    },
    {
      label: '스킬 관련 / 기타',
      Components: [
        ExpHolySymbol,
        SolJanus,
        LoadedDice,
        ExpShowDown,
        ExpEventStat,
        EventWorld,
        ExpEtc,
      ],
      bgcolor: listRGB.purple,
    },
  ];

  return <RateGridUI rateList={expList} />;
};

export default ExpRateList;
