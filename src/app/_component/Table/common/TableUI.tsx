import { TableContainer, Table } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ReactNode } from 'react';

type Props = {
  showBorder?: boolean;
  children: ReactNode;
};

const TableUI = ({ showBorder = true, children }: Props) => {
  return (
    <TableContainer
      sx={{
        borderRadius: 1,
        border: '1px solid #e0e0e0',
        borderBottom: 'none',
      }}
    >
      <Table
        sx={{
          th: { fontWeight: 500, fontSize: 14, bgcolor: grey[200] },
          td: { fontSize: 14 },
          ...(showBorder
            ? {
                '& th:not(:last-child)': {
                  borderRight: '1px solid #e0e0e0',
                },
                '& td:not(:last-child)': {
                  borderRight: '1px solid #e0e0e0',
                },
              }
            : {}),
        }}
      >
        {children}
      </Table>
    </TableContainer>
  );
};

export default TableUI;
