import { TableRow, TableCell } from '@mui/material';
import TableThCellUI from '../../common/TableThCellUI';
import PortalCountButtonUI from '@/app/_component/Button/PortalCountButtonUI';

const PortalCountRowUI = ({ cells }: PortalCellProps) => {
  return (
    <TableRow>
      <TableThCellUI align="center" sx={{ p: 0, py: 1.2 }}>
        클리어 타임
      </TableThCellUI>

      {cells.map(({ label, initialCount, count, increment, decrement }) => (
        <TableCell key={label} sx={{ p: 0 }}>
          <PortalCountButtonUI
            initialCount={initialCount}
            count={count}
            increment={increment}
            decrement={decrement}
          />
        </TableCell>
      ))}
    </TableRow>
  );
};

export default PortalCountRowUI;
