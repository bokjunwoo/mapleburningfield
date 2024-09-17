import { FormControlLabel, Checkbox } from '@mui/material';
import { grey } from '@mui/material/colors';

type Props = {
  item: StatCheckboxItem;
};

const StatCheckboxUI = ({ item }: Props) => {
  return (
    <FormControlLabel
      label={`+ ${item.value}%`}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: 20,
        m: 0,
        '& .MuiFormControlLabel-label': {
          ml: -1,
          fontSize: 14,
          fontWeight: 600,
          color: grey[800],
          lineHeight: '20px',
        },
      }}
      control={
        <Checkbox
          checked={item.checked}
          name={item.iconName}
          onChange={item.handleChange}
          disableRipple
          inputProps={{ 'aria-label': 'stat_checkbox' }}
          size="small"
        />
      }
    />
  );
};

export default StatCheckboxUI;
