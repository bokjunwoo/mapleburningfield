import CheckIcon from '@mui/icons-material/Check';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { FormControlLabel, Radio, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

type Props = {
  value: string;
  label: string;
  isSelected: boolean;
  disabled?: boolean;
};

const ExpRadioControlUI = ({
  value,
  label,
  isSelected,
  disabled = false,
}: Props) => (
  <FormControlLabel
    value={value}
    control={
      <Radio
        sx={{ color: grey[400] }}
        disableRipple
        size="small"
        icon={<RadioButtonUncheckedIcon fontSize="small" />}
        checkedIcon={
          <Box style={{ position: 'relative' }}>
            <RadioButtonUncheckedIcon
              fontSize="small"
              sx={{ mb: -0.5, color: grey[100] }}
            />
            <CheckIcon
              sx={{
                color: '#FFC107',
                position: 'absolute',
                top: -9,
                left: -2,
                fontSize: 30,
              }}
            />
          </Box>
        }
      />
    }
    label={label}
    labelPlacement="bottom"
    sx={{
      '& .MuiFormControlLabel-label': {
        mt: -1.2,
        fontSize: 14,
        fontWeight: 'bold',
        color: isSelected ? grey[100] : grey[400],
      },
    }}
    disabled={disabled}
  />
);

export default ExpRadioControlUI;
