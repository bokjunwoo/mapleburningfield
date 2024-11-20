import { Box } from '@mui/material';
import ExpObtainableTextUI from '../../../Typography/ExpObtainableTextUI';
import ExpItemIconUI from '../../common/ExpItemIconUI';
import ExpListItemUI from '../../common/ExpListItemUI';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  item: ExpectedExpRegion<GoldenTomatoRegion>;
  characterLevel: number;
};

const GoldenTomatoListItemUI = ({ item, characterLevel }: Props) => {
  const expectedExpPercentage = calculateExpPercentage(
    characterLevel,
    item.exp * item.count,
  );

  return (
    <ExpListItemUI isCheck={item.checked}>
      <Box ml={1}>
        <ExpItemIconUI region={item.region} folder="region_icon" />
      </Box>

      <ExpObtainableTextUI
        region={item.region}
        expPercentage={expectedExpPercentage}
      />
    </ExpListItemUI>
  );
};

export default GoldenTomatoListItemUI;
