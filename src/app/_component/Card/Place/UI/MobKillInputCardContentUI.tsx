import { Box, CardContent, Typography } from '@mui/material';
import MobKillInput from '@/app/_component/Form/MobKillInput';

const MobKillInputCardContentUI = ({ mapInfo }: MapInfoProps) => {
  return (
    <CardContent
      sx={{
        '&.MuiCardContent-root:last-child': { pb: 2 },
      }}
    >
      <Box>
        <Typography variant="body2" fontSize={16} fontWeight={600}>
          마릿수 설정
        </Typography>
        <Typography
          variant="body2"
          fontSize={14}
          fontWeight={600}
          color="GrayText"
          mb={1}
        >
          해당 마릿수 변경으로 모든 정보가 계산됩니다.
        </Typography>
      </Box>

      <MobKillInput mapInfo={mapInfo} />
    </CardContent>
  );
};

export default MobKillInputCardContentUI;
