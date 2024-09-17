import { TableRow } from '@mui/material';
import TableThCellUI from '../../common/TableThCellUI';
import PortalExpRewardCellUI from './PortalExpRewardCellUI';

type Props = {
  mapInfo: MapInfo;
  cells: PortalCell[];
};

const PortalExpRewardRowUI = ({ mapInfo, cells }: Props) => {
  return (
    <TableRow>
      <TableThCellUI align="center" sx={{ p: 0, py: 1.2 }}>
        경험치
      </TableThCellUI>

      {cells.map(({ label, type, expMultiplier, count }) => (
        <PortalExpRewardCellUI
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

export default PortalExpRewardRowUI;
