import { TableRow } from '@mui/material';
import TableThCellUI from './TableThCellUI';

type Props<T extends { label: string }> = {
  cells: Pick<T, 'label'>[];
};

const TableHeadRowUI = <T extends { label: string }>({ cells }: Props<T>) => {
  const columnWidth = (100 - 15) / cells.length;

  return (
    <TableRow>
      <TableThCellUI align="center" width="15%" />

      {cells.map((cell) => (
        <TableThCellUI
          key={cell.label}
          width={`${columnWidth}%`}
          align="center"
          sx={{ p: 1.3 }}
        >
          {cell.label}
        </TableThCellUI>
      ))}
    </TableRow>
  );
};

export default TableHeadRowUI;
