import { Box, Typography, InputAdornment } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ChangeEvent } from 'react';
import InputAdormentStyle from '../style/InputAdormentStyle';

type Props = {
  description: string;
  adornment: number;
  value: number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const MobKillInputUI = ({
  description,
  adornment,
  value,
  handleChange,
}: Props) => {
  return (
    <Box display="flex" alignItems="center" mb={1}>
      <Typography
        variant="body2"
        pl={1}
        height={36}
        display="flex"
        alignItems="center"
        fontSize={14}
        bgcolor="#f5f5f5"
        width="100%"
        sx={{
          borderTop: '1px solid #ddd',
          borderLeft: '1px solid #ddd',
          borderBottom: '1px solid #ddd',
          borderTopLeftRadius: 2,
          borderBottomLeftRadius: 2,
        }}
      >
        {description}
      </Typography>

      <InputAdormentStyle
        size="small"
        value={value === 0 ? '' : value}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Typography variant="body2" sx={{ color: grey[800] }}>
                / {adornment}
              </Typography>
            </InputAdornment>
          ),
        }}
        inputProps={{
          sx: {
            textAlign: 'end',
            p: 0,
            fontSize: 14,
            width: 80,
            height: 36,
          },
          'aria-label': description,
        }}
      />
    </Box>
  );
};

export default MobKillInputUI;
