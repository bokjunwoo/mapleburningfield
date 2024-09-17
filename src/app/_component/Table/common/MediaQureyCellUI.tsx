import { TableCell } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  headCell: HeadCell;
  children: ReactNode;
};

const MediaQureyCellUI = ({ headCell, children }: Props) => {
  return (
    <TableCell
      sx={{ px: 1, py: 0, wordBreak: 'keep-all', ...headCell.mediaQurey }}
    >
      {children}
    </TableCell>
  );
};

export default MediaQureyCellUI;
