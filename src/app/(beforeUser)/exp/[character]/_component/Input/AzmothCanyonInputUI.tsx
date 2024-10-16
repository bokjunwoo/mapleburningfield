import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { grey, orange, yellow } from '@mui/material/colors';
import EventListItemUI from '../List/Event/common/EventListItemUI';

type Props = {
  inputValue: number;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const AzmothCanyonInputUI = ({ inputValue, handleInputChange }: Props) => {
  return (
    <EventListItemUI bgcolor={yellow[50]}>
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
            획득 포인트
          </Typography>
        </Box>

        <TextField
          value={inputValue === 0 ? '' : inputValue}
          onChange={handleInputChange}
          fullWidth
          id="time"
          variant="outlined"
          size="small"
          placeholder="0 ~ 10000"
          autoComplete="off"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography variant="body2">점</Typography>
              </InputAdornment>
            ),
          }}
          sx={{
            bgcolor: 'white',
            height: 35,
            width: '72%',
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

export default AzmothCanyonInputUI;
