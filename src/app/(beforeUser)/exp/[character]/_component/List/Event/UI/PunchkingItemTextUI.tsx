import ExpObtainableTextUI from '../../../Typography/ExpObtainableTextUI';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  item: ExpectedExpRegion<PunchkingScore>;
  characterLevel: number;
};

const PunchkingItemTextUI = ({ item, characterLevel }: Props) => {
  const expPercentage = calculateExpPercentage(characterLevel, item.exp);

  return (
    <ExpObtainableTextUI
      region={`${item.region}점`}
      expPercentage={expPercentage}
    />
  );
};

export default PunchkingItemTextUI;
