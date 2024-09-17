import { Card, CardHeader } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

type Props = {
  children: React.ReactNode;
};

const ExpLayoutUI = ({ children }: Props) => {
  return (
    <Card
      sx={{
        bgcolor: blueGrey[800],
        px: 1.5,
        py: 1,
        pb: 1.5,
        my: 3,
        borderRadius: 2,
        boxShadow: 'none',
      }}
    >
      <CardHeader
        title="CHARACTOR EXP SCHEDULER"
        sx={{ p: 0, pb: 1 }}
        titleTypographyProps={{
          color: '#ddfe01',
          fontWeight: 500,
          fontSize: 20,
        }}
      />

      {children}
    </Card>
  );
};

export default ExpLayoutUI;
