import ExpObtainableTextUI from '../../../Typography/ExpObtainableTextUI';
import ExpUnableTextUI from '../../../Typography/ExpUnableTextUI';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  item: ExpectedExpRegion<EXPCouponRegion>;
  characterLevel: number;
  isObtainable: boolean;
};

const EXPCouponItemTextUI = ({ item, characterLevel, isObtainable }: Props) => {
  const expectedExpPercentage = calculateExpPercentage(
    characterLevel,
    item.exp * item.count,
  );

  if (isObtainable) {
    return (
      <ExpObtainableTextUI
        region={item.region}
        expPercentage={expectedExpPercentage}
      />
    );
  }

  return <ExpUnableTextUI region={item.region} />;
};

export default EXPCouponItemTextUI;
