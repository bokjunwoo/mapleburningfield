import { Grid } from '@mui/material';
import RateListUI from '../List/Rate/UI/RateListUI';

type Props = {
  rateList: RateItem[];
};

const RateGridUI = ({ rateList }: Props) => {
  return (
    <Grid container spacing={1}>
      {rateList.map((item) => (
        <Grid item xs={12} sm={6} md={3} lg={3} key={item.label}>
          <RateListUI item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RateGridUI;
