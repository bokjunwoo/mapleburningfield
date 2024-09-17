import { TableRow } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  hover: boolean;
  open: boolean;
  bgcolor: string;
  children: ReactNode;
};

const TableCollapsibleRowUI = ({ hover, open, bgcolor, children }: Props) => {
  return (
    <TableRow
      hover={hover}
      sx={{ '& > *': { borderBottom: open ? 'none' : '' }, bgcolor }}
    >
      {children}
    </TableRow>
  );
};

export default TableCollapsibleRowUI;
