'use client';

import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import ExpDescriptionTooltipUI from '../Tooltip/ExpDescriptionTooltipUI';
import { characterInfoState } from '@/app/atoms/characterInfoState';
import useLevelProgress from '@/app/hooks/useLevelProgress';
import { truncateToFixed } from '@/app/utils/format';
import { calculateExpPercentage } from '@/app/utils/mob';

const AcquisitionExpInfoGridUI = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const character = useRecoilValue(characterInfoState);

  const { level, remainingExp } = useLevelProgress(
    character.character_level,
    character.character_exp,
  );

  const expPercentage = calculateExpPercentage(level, remainingExp);

  if (isMediumScreen) {
    return (
      <Grid
        container
        display="flex"
        alignItems="center"
        bgcolor={blueGrey[500]}
        borderRadius={1}
        mt={1.5}
        py={0.5}
      >
        <Grid item xs={12}>
          <Typography
            variant="body2"
            textAlign="center"
            fontSize={18}
            fontWeight={600}
            color={grey[200]}
            px={2}
          >
            경험치 획득 시 도달 레벨
          </Typography>
        </Grid>

        <Grid item xs={11} alignItems="center">
          <Typography
            variant="body2"
            textAlign="center"
            fontSize={24}
            fontWeight={600}
            color="#f5f0cb"
            pl={isSmallScreen ? 3 : 7}
          >
            {level}({truncateToFixed(expPercentage, 3)}%)
          </Typography>
        </Grid>

        <Grid item xs={1} display="flex" justifyContent="end">
          <Box display="flex" alignItems="center">
            <ExpDescriptionTooltipUI character={character}>
              <IconButton aria-label="Help">
                <HelpCenterIcon />
              </IconButton>
            </ExpDescriptionTooltipUI>
          </Box>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      bgcolor={blueGrey[500]}
      borderRadius={1}
      mt={1.5}
      py={0.5}
    >
      <Grid item xs={4}>
        <Typography
          variant="body2"
          fontSize={18}
          fontWeight={600}
          color={grey[200]}
          px={2}
        >
          경험치 획득 시 도달 레벨
        </Typography>
      </Grid>

      <Grid item xs={4} alignItems="center">
        <Typography
          variant="body2"
          textAlign="center"
          fontSize={24}
          fontWeight={600}
          color="#f5f0cb"
        >
          {level}({truncateToFixed(expPercentage, 3)}%)
        </Typography>
      </Grid>

      <Grid item xs={4} display="flex" justifyContent="end">
        <Box display="flex" alignItems="center">
          <ExpDescriptionTooltipUI character={character}>
            <IconButton aria-label="Help">
              <HelpCenterIcon />
            </IconButton>
          </ExpDescriptionTooltipUI>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AcquisitionExpInfoGridUI;
