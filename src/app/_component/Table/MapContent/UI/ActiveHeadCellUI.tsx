import { grey } from '@mui/material/colors';
import TableThCellUI from '../../common/TableThCellUI';

type Props = {
  label: string;
  columnWidth: number;
};

const ActiveHeadCellUI = ({ label, columnWidth }: Props) => {
  return (
    <TableThCellUI
      align="center"
      sx={{
        width: columnWidth,
        p: 1.3,
        bgcolor: grey[300],
      }}
    >
      {label}
    </TableThCellUI>
  );
};

export default ActiveHeadCellUI;
