import { TableRow } from '@mui/material';
import TableThCellUI from '../../common/TableThCellUI';
import PortalHuntEfficiencyCellUI from './PortalHuntEfficiencyCellUI';

type Props = {
  mapInfo: MapInfo;
  cells: PortalCell[];
};

const PortalHuntEfficiencyRowUI = ({ mapInfo, cells }: Props) => {
  return (
    <TableRow>
      <TableThCellUI align="center" sx={{ p: 0, py: 1.2 }}>
        사냥효율
      </TableThCellUI>

      {cells.map(({ label, type, expMultiplier, count }) => (
        <PortalHuntEfficiencyCellUI
          key={label}
          mapInfo={mapInfo}
          type={type}
          expMultiplier={expMultiplier}
          count={count}
        />
      ))}
    </TableRow>
  );
};

export default PortalHuntEfficiencyRowUI;
