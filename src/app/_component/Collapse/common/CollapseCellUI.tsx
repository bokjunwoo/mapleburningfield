import { Collapse, TableCell, TableRow } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  colSpan: number;
  bgcolor: string;
  children: ReactNode;
};

const CollapseCellUI = ({ isOpen, colSpan, children, bgcolor }: Props) => {
  return (
    <TableRow sx={{ bgcolor }}>
      <TableCell
        sx={{
          paddingBottom: 0,
          paddingTop: 0,
          borderBottom: isOpen ? '' : 'none',
        }}
        colSpan={colSpan}
      >
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default CollapseCellUI;
