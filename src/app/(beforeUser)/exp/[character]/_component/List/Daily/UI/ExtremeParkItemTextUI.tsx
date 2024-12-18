import ExpObtainableTextUI from '../../../Typography/ExpObtainableTextUI';
import ExpUnableTextUI from '../../../Typography/ExpUnableTextUI';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  item: ExpectedExpRegion<ExtremeParkRegion>;
  characterLevel: number;
  isObtainable: boolean;
};

const ExtremeParkItemTextUI = ({
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

export default ExtremeParkItemTextUI;
