import { Grid } from '@mui/material';
import StatCheckboxInfoUI from '../Box/Stat/UI/StatCheckboxInfoUI';
import StatCountButtonInfoUI from '../Box/Stat/UI/StatCountButtonInfoUI';
import StatRadioInfoUI from '../Box/Stat/UI/StatRadioInfoUI';
import StatTextInfoUI from '../Box/Stat/UI/StatTextInfoUI';

type Props = {
  statTextList?: StatTextItem[];
  statRadioList?: StatRadioItem[];
  statCheckboxList?: StatCheckboxItem[];
  statCountButtonList?: StatCountButtonItem[];
};

const StatGridUI = ({
  statTextList,
  statRadioList,
  statCheckboxList,
  statCountButtonList,
}: Props) => {
  return (
    <Grid container spacing={1} mb={2}>
      {statTextList?.map((item) => (
        <Grid item xs={6} key={item.label}>
          <StatTextInfoUI item={item} />
        </Grid>
      ))}

      {statRadioList?.map((item) => (
        <Grid item xs={6} key={item.label}>
          <StatRadioInfoUI item={item} />
        </Grid>
      ))}

      {statCheckboxList?.map((item) => (
        <Grid item xs={6} key={item.label}>
          <StatCheckboxInfoUI item={item} />
        </Grid>
      ))}

      {statCountButtonList?.map((item) => (
        <Grid item xs={6} key={item.label}>
          <StatCountButtonInfoUI item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatGridUI;
