import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { red } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import { characterInfoState } from '@/app/atoms/characterInfoState';
import useLevelProgress from '@/app/hooks/useLevelProgress';
import { truncateToFixed } from '@/app/utils/format';
import { calculateExpPercentage } from '@/app/utils/mob';

const CharacterToDoUI = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const character = useRecoilValue(characterInfoState);

  const { totalExpectedExp } = useLevelProgress(
    character.character_level,
    character.character_exp,
  );

  const expPercentage = calculateExpPercentage(
    character.character_level,
    totalExpectedExp,
  );

  return (
    <Box
      bgcolor="rgba(0, 0, 0, 0.7)"
      sx={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
      borderRadius={isMediumScreen ? 10 : 100}
      p={1}
    >
      <Typography
        variant="body2"
        textAlign="center"
        fontSize={isMediumScreen ? 32 : 36}
        fontWeight={500}
        color="white"
      >
        메할일만 했는데도
      </Typography>
      <Typography
        variant="body2"
        textAlign="center"
        fontSize={isMediumScreen ? 20 : 24}
        fontWeight={500}
        color="white"
      >
        획득 경험치가{' '}
        <Typography
          component="span"
          variant="body2"
          fontSize={18}
          fontWeight={600}
          color={red[500]}
          mx={0.5}
        >
          ▲
        </Typography>
        <Typography
          component="span"
          variant="body2"
          fontSize={28}
          fontWeight={600}
          color="#ddfe01"
        >
          {`${truncateToFixed(expPercentage, 3)}%`}
        </Typography>{' '}
        이야..
      </Typography>
    </Box>
  );
};

export default CharacterToDoUI;
