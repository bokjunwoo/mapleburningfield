import { TableHead, TableRow, TableCell, TableSortLabel } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

type Props = {
  headCells: HeadCell[];
  orderBy: keyof HeadCellInfo;
  order: 'desc' | 'asc';
  createSortHandler: (
    property: keyof HeadCellInfo,
  ) => (event: React.MouseEvent<unknown>) => void;
};

const PlaceSortHeadUI = ({
  headCells,
  orderBy,
  order,
  createSortHandler,
}: Props) => {
  return (
    <TableHead sx={{ bgcolor: blueGrey[100] }}>
      <TableRow>
        <TableCell />

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              px: 1,
              wordBreak: 'keep-all',
              ...headCell.mediaQurey,
            }}
          >
            {headCell.disableSorting ? (
              headCell.label
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'desc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default PlaceSortHeadUI;
