import { Avatar, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import StatChipUI from '../../../Chip/UI/StatChipUI';

type Props = {
  label: string;
  iconName: string;
  children: React.ReactNode;
};

const StatInfoUI = ({ label, iconName, children }: Props) => {
  return (
    <Box display="flex">
      <Box
        width="100%"
        display="flex"
        border={`2px solid ${grey[400]}`}
        bgcolor={grey[200]}
        borderRadius={1}
        p={1}
      >
        <Avatar
          variant="rounded"
          alt={label}
          src={`/images/stat_icon/${iconName}.png`}
        />

        <Box width="100%" display="flex" flexDirection="column" ml={1}>
          <StatChipUI label={label} />
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default StatInfoUI;
