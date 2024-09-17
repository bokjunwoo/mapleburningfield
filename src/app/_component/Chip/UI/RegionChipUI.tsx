import { Chip, Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';
import { REGION_COLOR } from '@/app/constants/color';

type Props = {
  value: string;
  isSelected: boolean;
  onToggle: () => void;
  isAccessible: boolean;
};

const RegionChipUI = ({ value, isSelected, onToggle, isAccessible }: Props) => {
  const { bgcolor } = REGION_COLOR[value];

  return (
    <Chip
      onClick={onToggle}
      disabled={!isAccessible}
      sx={{
        outline: isSelected ? '1px solid #3366FF' : 'none',
        color: isSelected ? '#3366FF' : grey[900],
        bgcolor,
        mr: 1,
        mt: 1,
        pl: 0.65,
        '& .MuiChip-label': {
          ml: -0.2,
        },
        fontSize: 14,
        fontWeight: 500,
        height: '36.5px',
        ':hover': {
          outline: '1px solid rgba(51, 102, 255, 0.3)',
          bgcolor,
          height: '36.5px',
        },
        borderRadius: 3,
      }}
      avatar={
        <Avatar
          src={`/images/region_icon/${value}.png`}
          variant="rounded"
          sx={{ p: 0.15 }}
          alt={`${value}_맵`}
        />
      }
      label={value}
    />
  );
};

export default RegionChipUI;
