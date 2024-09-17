import StatInfoUI from '../common/StatInfoUI';
import StatRuneRadioGroupUI from '@/app/_component/Radio/StatRuneRadioGroupUI';

type Props = {
  item: StatRadioItem;
};

const StatRadioInfoUI = ({ item }: Props) => {
  return (
    <StatInfoUI label={item.label} iconName={item.iconName}>
      <StatRuneRadioGroupUI item={item} />
    </StatInfoUI>
  );
};

export default StatRadioInfoUI;
