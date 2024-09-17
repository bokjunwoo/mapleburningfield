import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import { truncateToFixed } from '@/app/utils/format';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  exp: number;
  characterLevel: number;
  value: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PunchkingEventInputUI = ({
  exp,
  characterLevel,
  value,
  handleChange,
}: Props) => {
  const expPercentage = calculateExpPercentage(characterLevel, exp);

  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Box
            borderRight={`1px solid ${grey[400]}`}
            borderLeft={`1px solid ${grey[400]}`}
            height={35}
            bgcolor={orange[100]}
            ml={0.2}
          >
            <Typography
              component="span"
              variant="body2"
              fontWeight={500}
              px={2}
              lineHeight="35px"
            >
              직접 입력
            </Typography>
          </Box>

          <TextField
            size="small"
            value={value === 0 ? '' : value}
            onChange={handleChange}
            placeholder="0"
            autoComplete="off"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography variant="body2">점</Typography>
                </InputAdornment>
              ),
            }}
            inputProps={{
              'aria-label': 'punchking_input',
            }}
            sx={{
              bgcolor: 'white',
              height: 35,
              width: 100,
              borderRight: `1px solid ${grey[400]}`,
              '& .MuiOutlinedInput-root': {
                height: '100%',
                '& fieldset': {
                  border: 'none',
                },
                '&:hover fieldset': {
                  border: 'none',
                },
                '&.Mui-focused fieldset': {
                  border: 'none',
                },
              },
              '& input': {
                p: 0,
                pl: 3,
                fontSize: 14,
              },
            }}
          />
        </Box>

        <Typography
          component="span"
          variant="body2"
          color="textSecondary"
          fontWeight={500}
        >
          {truncateToFixed(expPercentage, 3)}%
        </Typography>
      </Box>
    </Box>
  );
};

export default PunchkingEventInputUI;
