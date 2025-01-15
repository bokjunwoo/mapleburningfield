import { Box, Typography, Avatar, Divider } from '@mui/material';
import { grey, orange } from '@mui/material/colors';

type Props = {
  skillInfo: SkillInfo;
};

const SkillInfoUI = ({ skillInfo }: Props) => {
  return (
    <Box
      bgcolor="#2b2b2b"
      p={2}
      borderRadius={2}
      mb={2}
      border="thick double white"
    >
      <Typography
        variant="body1"
        align="center"
        mb={0.5}
        color="white"
        fontWeight={600}
      >
        {skillInfo.NAME}
      </Typography>

      <Typography variant="body2" align="center" color={orange[600]} mb={1}>
        이벤트 기간: {skillInfo.DATE}
      </Typography>

      <Box display="flex" mb={2}>
        <Avatar
          variant="rounded"
          sx={{ mr: 2, width: 50, height: 50 }}
          aria-label={skillInfo.ICON}
          alt={skillInfo.NAME}
          src={`/images/title_icon/${skillInfo.ICON}.png`}
        />

        <Typography variant="body2" color="white">
          {skillInfo.MAIN_DESCRIPTION}
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: grey[200] }} />

      <Box mt={2}>
        <Box>
          <Typography variant="body2" color={orange[600]} component="span">
            [횟수]{' '}
          </Typography>
          <Typography variant="body2" color="white" component="span">
            {skillInfo.TIME_DESCRIPTION}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" color={orange[600]} component="span">
            [경험치]{' '}
          </Typography>
          <Typography variant="body2" color="white" component="span">
            {skillInfo.EXP_DESCRIPTION}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillInfoUI;
