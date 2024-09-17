import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, IconButton, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

type Props = {
  increment: () => void;
  decrement: () => void;
  disableIncrement: boolean;
  disableDecrement: boolean;
  text: string;
  hoverColor?: string;
  fontWeight?: number;
};

const CountButtonUI = ({
  increment,
  decrement,
  disableIncrement,
  disableDecrement,
  text,
  hoverColor = '',
  fontWeight = 400,
}: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20px',
      }}
    >
      <IconButton
        aria-label="감소버튼"
        onClick={decrement}
        sx={{
          width: 20,
          height: 20,
          p: 0,
          '&:hover': {
            bgcolor: hoverColor,
          },
        }}
        disabled={disableDecrement}
      >
        <ArrowDropDownIcon />
      </IconButton>

      <Typography
        variant="body2"
        fontSize={14}
        mx={0.3}
        fontWeight={fontWeight}
        color={grey[800]}
      >
        {text}
      </Typography>

      <IconButton
        aria-label="증가버튼"
        onClick={increment}
        sx={{
          width: 20,
          height: 20,
          p: 0,
          '&:hover': {
            bgcolor: hoverColor,
          },
        }}
        disabled={disableIncrement}
      >
        <ArrowDropUpIcon />
      </IconButton>
    </Box>
  );
};

export default CountButtonUI;
