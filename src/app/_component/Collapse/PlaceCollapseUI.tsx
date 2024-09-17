import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import PlaceInfo from '../Card/Place/PlaceInfo';
import MapSettingCardUI from '../Card/Place/UI/MapSettingCardUI';
import MiniMapCardUI from '../Card/Place/UI/MiniMapCardUI';
import CollapseCellUI from './common/CollapseCellUI';

type Props = {
  mapInfo: MapInfo;
  isOpen: boolean;
  colSpan: number;
};

const PlaceCollapseUI = ({ mapInfo, isOpen, colSpan }: Props) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <CollapseCellUI isOpen={isOpen} colSpan={colSpan} bgcolor={grey[100]}>
      <Grid container spacing={1} mt={1} mb={2}>
        {isMediumScreen ? (
          <>
            <Grid item xs={12} sm={6}>
              <MiniMapCardUI mapInfo={mapInfo} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MapSettingCardUI mapInfo={mapInfo} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <PlaceInfo mapInfo={mapInfo} />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} lg={4}>
              <MiniMapCardUI mapInfo={mapInfo} />
              <Box mt={1}>
                <MapSettingCardUI mapInfo={mapInfo} />
              </Box>
            </Grid>
            <Grid item xs={12} lg={8}>
              <PlaceInfo mapInfo={mapInfo} />
            </Grid>
          </>
        )}
      </Grid>
    </CollapseCellUI>
  );
};

export default PlaceCollapseUI;
