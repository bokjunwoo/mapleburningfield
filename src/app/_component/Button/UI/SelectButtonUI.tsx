import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';

type Props = {
  selected: string;
  label: string;
  handleChange: (value: string) => void;
};

const SelectButtonUI = ({ selected, label, handleChange }: Props) => {
  return (
    <Button
      disableRipple
      onClick={() => handleChange(label)}
      sx={{
        color: selected === label ? grey[50] : grey[800],
        border: `1px solid ${grey[400]}`,
        '&:hover': {
          color: selected === label ? grey[50] : grey[800],
          bgcolor: selected === label ? grey[800] : grey[200],
          border: `1px solid ${grey[400]}`,
        },
        bgcolor: selected === label ? grey[800] : 'white',
        fontWeight: 500,
      }}
    >
      {label}
    </Button>
  );
};

export default SelectButtonUI;
