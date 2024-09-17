import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { orange } from '@mui/material/colors';

const InputAdormentStyle = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
      borderColor: '#ddd',
    },
    '&:hover fieldset': {
      borderColor: '#FF9900',
    },
    '&.Mui-focused fieldset': {
      border: '1px solid',
      borderColor: orange[500],
      boxShadow: `0 0 0 2px rgba(255, 153, 0, 0.4)`,
    },
  },
});

export default InputAdormentStyle;
