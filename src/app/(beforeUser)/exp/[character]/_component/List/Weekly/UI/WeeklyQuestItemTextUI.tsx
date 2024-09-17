import { Box, Typography } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import ExpUnableTextUI from '../../../Typography/ExpUnableTextUI';
import WeeklyCountButton from '@/app/_component/Button/WeeklyCountButton';
import { DAILY_QUEST_ALL_REGIONS } from '@/app/constants/exp/daily';
import { ARANE_RIVER_WEEKLY_QUEST_NAME } from '@/app/constants/exp/weekly';
import { findNearestQuestRegion } from '@/app/utils/exp';
import { truncateToFixed } from '@/app/utils/format';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  item: ExpectedExpRegion<AraneRiverWeeklyQuestRegion>;
  count: number;
  increment: () => void;
  decrement: () => void;
  characterLevel: number;
  isObtainable: boolean;
  warning: boolean;
};

const WeeklyQuestItemTextUI = ({
  item,
  count,
  increment,
  decrement,
  characterLevel,
  isObtainable,
  warning,
}: Props) => {
  const expPercentage = calculateExpPercentage(
    characterLevel,
    item.exp * count,
  );

  const nearestRegion = findNearestQuestRegion(
    characterLevel,
    DAILY_QUEST_ALL_REGIONS,
  );

  const primaryText = isObtainable ? (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography
        component="span"
        variant="body2"
        color={grey[800]}
        fontWeight={500}
        lineHeight="24px"
      >
        {ARANE_RIVER_WEEKLY_QUEST_NAME[item.region]}
      </Typography>
      <Box display="flex">
        <Typography
          component="span"
          variant="body2"
          color={grey[800]}
          fontWeight={500}
        >
          {truncateToFixed(expPercentage, 3)}% /{' '}
        </Typography>

        <Box sx={{ mr: -1 }}>
          <WeeklyCountButton
            count={count}
            increment={increment}
            decrement={decrement}
          />
        </Box>
      </Box>
    </Box>
  ) : (
    <ExpUnableTextUI region={ARANE_RIVER_WEEKLY_QUEST_NAME[item.region]} />
  );

  return (
    <Box width="100%">
      {primaryText}
      {warning && isObtainable && (
        <Typography
          variant="body2"
          color={red[400]}
          fontSize={10}
          lineHeight="10px"
          fontWeight={600}
        >{`${nearestRegion}에서 사냥 경험치가 더 좋습니다.`}</Typography>
      )}
    </Box>
  );
};

export default WeeklyQuestItemTextUI;
