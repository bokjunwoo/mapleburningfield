import { TableRow, TableCell } from '@mui/material';
import TableThCellUI from '../../common/TableThCellUI';
import PortalSelectUI from '@/app/_component/Select/UI/PortalSelectUI';

type Props = {
  cells: PortalCell[];
};

const PortalExpSettingRowUI = ({ cells }: Props) => {
  return (
    <TableRow>
      <TableThCellUI align="center" sx={{ p: 0, py: 1.2 }}>
        설정
      </TableThCellUI>

      {cells.map(
        ({ label, expMultiplier, menuItem, menuText, expMultiplierChange }) => (
          <TableCell key={label} sx={{ p: 0 }} align="center">
            {menuItem && expMultiplierChange ? (
              <PortalSelectUI
                menuItem={menuItem}
                value={expMultiplier}
                handleChange={expMultiplierChange}
              />
            ) : (
              menuText
            )}
          </TableCell>
        ),
      )}
    </TableRow>
  );
};

export default PortalExpSettingRowUI;
