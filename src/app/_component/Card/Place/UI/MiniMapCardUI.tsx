import { Card, CardHeader, Avatar, CardMedia } from '@mui/material';

const MiniMapCardUI = ({ mapInfo }: MapInfoProps) => {
  return (
    <Card sx={{ border: '4px solid white' }}>
      <CardHeader
        avatar={
          <Avatar
            aria-label={mapInfo.map_name}
            variant="rounded"
            src={`/images/region_icon/${mapInfo.map_region}.png`}
            sx={{ m: -1 }}
            alt={mapInfo.map_region}
          />
        }
        title={mapInfo.map_region}
        titleTypographyProps={{ fontWeight: 500 }}
        subheader={mapInfo.map_name}
        subheaderTypographyProps={{ color: 'white' }}
        sx={{
          bgcolor: '#404142',
          color: 'white',
          borderRadius: 1,
          py: 1.5,
        }}
      />

      <CardMedia
        sx={{
          borderTop: '4px solid white',
          borderRadius: 1,
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}
        component="img"
        image={`/images/map/${mapInfo.map_region}/${mapInfo.map_name}.png`}
        alt={mapInfo.map_name}
      />
    </Card>
  );
};

export default MiniMapCardUI;
