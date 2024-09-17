import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, IconButton, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';

type Props = {
  initialCount: number;
  count: number;
  increment: () => void;
  decrement: () => void;
};

const PortalCountButtonUI = ({
  initialCount,
  count,
  increment,
  decrement,
}: Props) => {
  const positiveThreshold = Math.ceil((initialCount / 10) * 4);
  const negativeThreshold = Math.ceil((initialCount / 10) * 2);

  const disableIncrement = initialCount + positiveThreshold === count;

  const disableDecrement = initialCount - negativeThreshold === count;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30.59px',
      }}
    >
      <IconButton
        aria-label="감소버튼"
        onClick={decrement}
        sx={{
          p: 0,
          '&:hover': {
            bgcolor: orange[50],
          },
        }}
        disabled={disableDecrement}
      >
        <ArrowDropDownIcon />
      </IconButton>

      <Typography variant="body2" fontSize={13} mx={0.3}>
        {count} 초
      </Typography>

      <IconButton
        aria-label="증가버튼"
        onClick={increment}
        sx={{
          p: 0,
          '&:hover': {
            bgcolor: orange[50],
          },
        }}
        disabled={disableIncrement}
      >
        <ArrowDropUpIcon />
      </IconButton>
    </Box>
  );
};

export default PortalCountButtonUI;
