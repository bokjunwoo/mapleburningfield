import { Box, Typography, Avatar, Divider } from '@mui/material';
import { grey, orange, red } from '@mui/material/colors';
import useMobReward from '@/app/hooks/useMobReward';

type Props = {
  region: AraneRiverRegion | GrandisRegion;
  mob: MapMobInfo;
  burningField: number;
};

const MobInfoUI = ({ region, mob, burningField }: Props) => {
  const {
    characterLevel,
    mesoDropRate,
    itemDropRate,
    expMultiplier,
    mesoMultiplier,
    mobExp,
    mobMeso,
  } = useMobReward({
    mob,
    additionalExpRate: burningField,
  });
  console.log('expMultiplier', expMultiplier);

  return (
    <Box bgcolor="#2b2b2b" p={2} borderRadius={2} border="thick double white">
      <Typography
        variant="body1"
        align="center"
        mb={1}
        color="white"
        fontWeight={600}
      >
        {mob.name}
      </Typography>

      <Box display="flex" mb={2}>
        <Avatar
          variant="rounded"
          sx={{ mr: 2, width: 60, height: 60 }}
          aria-label={mob.name}
          alt={mob.name}
          src={`/images/mob/${region}/${mob.name}.png`}
        />

        <Box flexDirection="column">
          <Typography variant="body2" color="white">
            레벨: {mob.level.toLocaleString()}
          </Typography>
          <Typography variant="body2" color="white">
            기본 경험치: {mob.exp.toLocaleString()}
          </Typography>
          <Typography variant="body2" color="white">
            평균 메소: {mob.meso.toLocaleString()}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: grey[200] }} />

      <Box flexDirection="column" mt={2}>
        <Typography variant="body2" color={orange[600]}>
          [내 배율에 따른 몬스터 스탯]
        </Typography>
        <Typography variant="body2" color="white">
          {`경험치: ${mobExp.toLocaleString()}`}
        </Typography>
        <Typography variant="body2" color="white">
          {`기본 메소(평균 / 아획 ${itemDropRate}%): ${mobMeso.pure.toLocaleString()}`}
        </Typography>
        <Typography variant="body2" color="white">
          {`메획 메소(평균 / 메획 ${mesoDropRate}%): ${mobMeso.bonus.toLocaleString()}`}
        </Typography>
      </Box>

      <Box flexDirection="column" mt={2}>
        <Typography variant="body2" color={orange[600]}>
          [자세한 정보]
        </Typography>
        <Typography variant="body2" color="white">
          몬스터와의 레벨 차이: {mob.level - characterLevel}
        </Typography>

        <Box display="flex">
          <Typography variant="body2" component="span" color="white">
            레벨차이에 따른 경험치 배율:
          </Typography>
          &nbsp;
          <Typography
            variant="body2"
            component="span"
            color={expMultiplier * 100 > 100 ? '#CCFF00' : red[500]}
          >
            {(expMultiplier * 100).toFixed(0)}%
          </Typography>
        </Box>

        <Box display="flex">
          <Typography variant="body2" component="span" color="white">
            레벨차이에 따른 메소 배율:
          </Typography>
          &nbsp;
          <Typography
            variant="body2"
            component="span"
            color={mesoMultiplier * 100 >= 100 ? 'white' : red[500]}
          >
            {(mesoMultiplier * 100).toFixed(0)}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MobInfoUI;
