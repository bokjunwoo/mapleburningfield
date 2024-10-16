import { Box } from '@mui/material';
import DiffObtainableTextUI from '../../../Typography/DiffObtainableTextUI';
import ExpItemIconUI from '../../common/ExpItemIconUI';
import ExpListItemUI from '../../common/ExpListItemUI';

type Props = {
  item: ExpectedExpRegion<AzmothCanyonRegion>;
  inputValue: number;
};

const AzmothCanyonListItemDiffUI = ({ item, inputValue }: Props) => {
  return (
    <ExpListItemUI isCheck={item.checked}>
      <Box ml={1}>
        <ExpItemIconUI region={item.region} folder="region_icon" />
      </Box>

      <DiffObtainableTextUI item={item} inputValue={inputValue} />
    </ExpListItemUI>
  );
};

export default AzmothCanyonListItemDiffUI;
