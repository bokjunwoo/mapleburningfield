import { Box, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

type Props = {
  item: SelectItem;
};

const RatePanelBoxUI = ({ item }: Props) => {
  return (
    <Box
      p={1}
      width="33%"
      textAlign="center"
      border={`1px solid ${blueGrey[400]}`}
      borderRadius={1}
      bgcolor={blueGrey[500]}
    >
      <Typography variant="body2" color="white" fontWeight={500}>
        {item.label}
      </Typography>
      <Typography variant="body1" color="#FFF9D1" fontWeight={600}>
        {item.value}%
      </Typography>
    </Box>
  );
};

export default RatePanelBoxUI;
