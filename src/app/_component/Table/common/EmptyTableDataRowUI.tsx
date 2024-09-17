import { TableRow, TableCell, TableBody, TableCellProps } from '@mui/material';

type Props = {
  text: string;
} & TableCellProps;

const EmptyTableRowCommon = ({ text, ...props }: Props) => (
  <TableBody>
    <TableRow>
      <TableCell sx={{ p: 2 }} {...props}>
        {text}
      </TableCell>
    </TableRow>
  </TableBody>
);

export default EmptyTableRowCommon;
