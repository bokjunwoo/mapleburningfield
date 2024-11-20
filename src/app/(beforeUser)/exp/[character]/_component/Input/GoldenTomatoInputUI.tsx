import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import EventListItemUI from '../List/Event/common/EventListItemUI';

type Props = {
  value: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const GoldenTomatoInputUI = ({ value, handleChange }: Props) => {
  return (
    <EventListItemUI>
      <Box display="flex" alignItems="center" width="100%">
        <Box width="28%" borderRight={`1px solid ${grey[400]}`}>
          <Typography
            bgcolor={orange[100]}
            variant="body2"
            px={1}
            fontWeight={500}
            lineHeight="35px"
            alignItems="center"
            textAlign="center"
            sx={{ borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }}
          >
            획득 점수
          </Typography>
        </Box>

        <TextField
          value={value === 0 ? '' : value}
          onChange={handleChange}
          fullWidth
          id="time"
          variant="outlined"
          size="small"
          placeholder="1 ~ 1150"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography variant="body2">점</Typography>
              </InputAdornment>
            ),
          }}
          autoComplete="off"
          sx={{
            bgcolor: 'white',
            width: '72%',
            height: 35,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
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
    </EventListItemUI>
  );
};

export default GoldenTomatoInputUI;
