import StatInfoUI from '../common/StatInfoUI';
import EventBuffCountButton from '@/app/_component/Button/EventBuffCountButton';

type Props = {
  item: StatCountButtonItem;
};

const StatCountButtonInfoUI = ({ item }: Props) => {
  return (
    <StatInfoUI label={item.label} iconName={item.iconName}>
      <EventBuffCountButton item={item} />
    </StatInfoUI>
  );
};

export default StatCountButtonInfoUI;
