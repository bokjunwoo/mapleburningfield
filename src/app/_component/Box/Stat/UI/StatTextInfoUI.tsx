import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import StatInfoUI from '../common/StatInfoUI';

type Props = {
  item: StatTextItem;
};

const StatTextInfoUI = ({ item }: Props) => {
  return (
    <StatInfoUI label={item.label} iconName={item.iconName}>
      <Typography
        variant="body2"
        fontSize={14}
        fontWeight={600}
        lineHeight="20px"
        align="center"
        color={grey[800]}
      >
        + {item.value}%
      </Typography>
    </StatInfoUI>
  );
};

export default StatTextInfoUI;
