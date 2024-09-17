import { Grid, useMediaQuery, useTheme } from '@mui/material';
import EmptyMobInfoUI from '../Box/Mob/EmptyMobInfoUI';
import MobInfoUI from '../Box/Mob/MobInfoUI';

const MobInfoGridUI = ({ mapInfo }: MapInfoProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={1}>
      {mapInfo.mobs.map((mob) => (
        <Grid item xs={isSmallScreen ? 12 : 6} key={mob.name}>
          <MobInfoUI
            region={mapInfo.map_region}
            mob={mob}
            burningField={mapInfo.burning_field}
          />
        </Grid>
      ))}

      {!isSmallScreen && mapInfo.mobs.length % 2 !== 0 && (
        <Grid item xs={6}>
          <EmptyMobInfoUI />
        </Grid>
      )}
    </Grid>
  );
};

export default MobInfoGridUI;
