import { TableCell, TableCellProps } from '@mui/material';
import { ReactNode } from 'react';

type Props = TableCellProps & {
  children?: ReactNode;
};

const TableThCellUI = ({ children, ...props }: Props) => {
  return (
    <TableCell component="th" scope="row" {...props}>
      {children}
    </TableCell>
  );
};

export default TableThCellUI;
