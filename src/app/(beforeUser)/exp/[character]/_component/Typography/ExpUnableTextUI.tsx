import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

type Props = {
  region: string;
};

const ExpUnableTextUI = ({ region }: Props) => {
  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between">
        <Typography
          component="span"
          variant="body2"
          color={grey[800]}
          fontWeight={500}
        >
          {region}
        </Typography>
        <Typography
          component="span"
          variant="body2"
          color={grey[800]}
          fontWeight={500}
        >
          획득불가
        </Typography>
      </Box>
    </Box>
  );
};

export default ExpUnableTextUI;
