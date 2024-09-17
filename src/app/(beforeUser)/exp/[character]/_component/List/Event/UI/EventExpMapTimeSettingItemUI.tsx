import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import EventListItemUI from '../common/EventListItemUI';

type Props = {
  inputValue: number;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectValue: TimeUnit;
  handleSelectChange: (event: SelectChangeEvent<TimeUnit>) => void;
};

const EventExpMapTimeSettingItemUI = ({
  inputValue,
  handleInputChange,
  selectValue,
  handleSelectChange,
}: Props) => {
  return (
    <EventListItemUI>
      <Box display="flex" alignItems="center" width="100%">
        <Box width="200px" borderRight={`1px solid ${grey[400]}`}>
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
            잠수 시간
          </Typography>
        </Box>

        <TextField
          value={inputValue === 0 ? '' : inputValue}
          onChange={handleInputChange}
          fullWidth
          id="time"
          variant="outlined"
          size="small"
          placeholder={selectValue === '분' ? '1 ~ 720 분' : '1 ~ 72 시간'}
          autoComplete="off"
          sx={{
            bgcolor: 'white',
            height: 35,
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

        <Select
          value={selectValue}
          onChange={handleSelectChange}
          displayEmpty
          inputProps={{
            'aria-label': 'select_portal_box',
            sx: {
              fontSize: 14,
              ml: 3,
              mr: 1,
              p: 0,
            },
          }}
          sx={{
            width: 200,
            height: 35,
            bgcolor: 'white',
            textAlign: 'end',
            '&.MuiOutlinedInput-root': {
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
          }}
        >
          <MenuItem value="분" sx={{ fontSize: 14 }}>
            분
          </MenuItem>
          <MenuItem value="시간" sx={{ fontSize: 14 }}>
            시간
          </MenuItem>
        </Select>
      </Box>
    </EventListItemUI>
  );
};

export default EventExpMapTimeSettingItemUI;
