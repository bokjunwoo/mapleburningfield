import { Chip } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

type Props = {
  label: string;
};

const StatChipUI = ({ label }: Props) => {
  return (
    <Chip
      label={label}
      size="small"
      sx={{
        height: 20,
        bgcolor: blueGrey[400],
        color: 'white',
        fontWeight: 500,
      }}
    />
  );
};

export default StatChipUI;
