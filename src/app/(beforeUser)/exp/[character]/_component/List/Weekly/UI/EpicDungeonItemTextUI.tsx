import ExpObtainableTextUI from '../../../Typography/ExpObtainableTextUI';
import ExpUnableTextUI from '../../../Typography/ExpUnableTextUI';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  item: ExpectedExpRegion<EpicDungeonRegion>;
  characterLevel: number;
  isObtainable: boolean;
};

const EpicDungeonItemTextUI = ({
  item,
  characterLevel,
  isObtainable,
}: Props) => {
  const expPercentage = calculateExpPercentage(characterLevel, item.exp);

  if (isObtainable) {
    return (
      <ExpObtainableTextUI region={item.region} expPercentage={expPercentage} />
    );
  }

  return <ExpUnableTextUI region={item.region} />;
};

export default EpicDungeonItemTextUI;
