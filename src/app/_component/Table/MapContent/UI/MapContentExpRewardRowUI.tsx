import { TableRow } from '@mui/material';
import TableThCellUI from '../../common/TableThCellUI';
import ActiveExpRewardCellUI from './ActiveExpRewardCellUI';
import MapContentSelectUI from '@/app/_component/Select/UI/MapContentSelectUI';

type Props = {
  mapInfo: MapInfo;
  th: SelectThItem;
  mobContent: MobContent;
};

const MapContentExpRewardRowUI = ({ mapInfo, th, mobContent }: Props) => {
  return (
    <TableRow>
      {th.onCountChange && th.menuItem ? (
        <TableThCellUI sx={{ p: 0 }}>
          <MapContentSelectUI
            menuItem={th.menuItem}
            selectedValue={th.selectedValue}
            handleChange={th.onCountChange}
          />
        </TableThCellUI>
      ) : (
        <TableThCellUI sx={{ py: 1.2 }}>{th.label}</TableThCellUI>
      )}

      {mobContent.cells.map((cell) => {
        return (
          <ActiveExpRewardCellUI
            key={cell.label}
            mapInfo={mapInfo}
            item={cell}
            selectedValue={th.selectedValue}
            runeState={mobContent.runeState}
          />
        );
      })}
    </TableRow>
  );
};

export default MapContentExpRewardRowUI;
