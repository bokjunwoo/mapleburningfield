import { Stack, Divider, useMediaQuery, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import RatePanelListItemUI from './RatePanelListItemUI';

type Props = {
  rateList: SelectItem[];
};

const RatesPanelListUI = ({ rateList }: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      sx={{ mt: 2, mb: 2 }}
      direction="row"
      divider={
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ bgcolor: grey[600] }}
        />
      }
      spacing={isSmallScreen ? 1 : 2}
    >
      {rateList.map((item) => {
        return <RatePanelListItemUI key={item.label} item={item} />;
      })}
    </Stack>
  );
};

export default RatesPanelListUI;
