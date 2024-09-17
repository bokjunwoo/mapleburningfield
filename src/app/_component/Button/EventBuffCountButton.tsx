import CountButtonUI from './UI/CountButtonUI';

type Props = {
  item: StatCountButtonItem;
};

const EventBuffCountButton = ({ item }: Props) => {
  const text = `Lv. ${item.count} / + ${item.value}%`;

  const disableIncrement = item.count === item.disableIncrement;
  const disableDecrement = item.count === item.disableDecrement;

  return (
    <CountButtonUI
      increment={item.increment}
      decrement={item.decrement}
      disableIncrement={disableIncrement}
      disableDecrement={disableDecrement}
      text={text}
      fontWeight={600}
    />
  );
};

export default EventBuffCountButton;
