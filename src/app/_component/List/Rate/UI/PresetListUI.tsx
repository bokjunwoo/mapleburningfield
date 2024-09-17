import { Box } from '@mui/material';
import RateListUI from './RateListUI';

type Props = {
  rateList: RateItem[];
};

const PresetListUI = ({ rateList }: Props) => {
  return (
    <Box>
      {rateList.map((item) => (
        <Box key={item.label} mb={1}>
          <RateListUI item={item} />
        </Box>
      ))}
    </Box>
  );
};

export default PresetListUI;
