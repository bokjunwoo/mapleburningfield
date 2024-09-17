import CountButtonUI from './UI/CountButtonUI';

type Props = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const WeeklyCountButton = ({ count, increment, decrement }: Props) => {
  const text = `${count}회`;

  const disableIncrement = count === 3;
  const disableDecrement = count === 1;

  return (
    <CountButtonUI
      increment={increment}
      decrement={decrement}
      disableIncrement={disableIncrement}
      disableDecrement={disableDecrement}
      text={text}
    />
  );
};

export default WeeklyCountButton;
