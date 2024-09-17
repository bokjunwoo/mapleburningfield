import AccumulationPotion from './Preset/AccumulationPotion';
import ExpCoupon from './Preset/ExpCoupon';
import ExpPcRoom from './Preset/ExpPCroom';
import ExtremeGoldPotion from './Preset/ExtremeGoldPotion';
import MvpCoupon from './Preset/MvpCoupon';
import UnionLuckCoupon from './Preset/UnionLuckCoupon';
import UnionWealthCoupon from './Preset/UnionWealthCoupon';
import VIPCoupon from './Preset/VIPCoupon';
import WealthAcquisitionPotion from './Preset/WealthAcquisitionPotion';
import PresetListUI from './UI/PresetListUI';
import { listRGB } from '@/app/constants/color';

const PresetRateList = () => {
  const presetList: RateItem[] = [
    {
      label: '경험치 획득량',
      Components: [
        ExpCoupon,
        MvpCoupon,
        ExtremeGoldPotion,
        AccumulationPotion,
        VIPCoupon,
        ExpPcRoom,
      ],
      bgcolor: listRGB.blue,
    },
    {
      label: '아이템 드롭률 / 메소 획득량',
      Components: [UnionLuckCoupon, UnionWealthCoupon, WealthAcquisitionPotion],
      bgcolor: listRGB.green,
    },
  ];

  return <PresetListUI rateList={presetList} />;
};

export default PresetRateList;
