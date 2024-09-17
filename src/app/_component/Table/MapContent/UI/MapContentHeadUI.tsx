import { TableHead, TableRow } from '@mui/material';
import TableThCellUI from '../../common/TableThCellUI';
import ActiveHeadCellUI from './ActiveHeadCellUI';

type Props = {
  mobContent: MobContent;
};

const MapContentHeadUI = ({ mobContent }: Props) => {
  const columnWidth = (100 - 15) / mobContent.cells.length;

  return (
    <TableHead>
      <TableRow>
        <TableThCellUI width="15%" />

        {mobContent.cells.map((item) => (
          <ActiveHeadCellUI
            key={item.label}
            label={item.label}
            columnWidth={columnWidth}
          />
        ))}
      </TableRow>
    </TableHead>
  );
};

export default MapContentHeadUI;
