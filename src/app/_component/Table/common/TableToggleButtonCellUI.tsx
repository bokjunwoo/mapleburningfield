import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TableCell, IconButton } from '@mui/material';

type Props = {
  isOpen: boolean;
  toggleOpen: () => void;
};

const TableToggleButtonCellUI = ({ isOpen, toggleOpen }: Props) => {
  return (
    <TableCell sx={{ width: 10, p: 1 }}>
      <IconButton
        onClick={toggleOpen}
        aria-label={isOpen ? '상세정보 닫기' : '상세정보 열기'}
      >
        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </TableCell>
  );
};

export default TableToggleButtonCellUI;
