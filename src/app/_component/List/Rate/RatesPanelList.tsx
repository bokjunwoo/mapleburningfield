import { useRecoilValue } from 'recoil';
import RatesPanelListUI from './UI/RatesPanelListUI';
import { totalExpRateSelector } from '@/app/atoms/expRateState';
import { totalItemDropRateSelector } from '@/app/atoms/itemDropState';
import { totalMesoDropRateSelector } from '@/app/atoms/mesoDropState';

const RatesPanelList = () => {
  const expRate = useRecoilValue(totalExpRateSelector);
  const itemDropRate = useRecoilValue(totalItemDropRateSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropRateSelector);

  const rateList: SelectItem[] = [
    { label: '경험치 획득량', value: expRate },
    { label: '아이템 드롭률', value: itemDropRate },
    { label: '메소 획득량', value: mesoDropRate },
  ];

  return <RatesPanelListUI rateList={rateList} />;
};

export default RatesPanelList;
