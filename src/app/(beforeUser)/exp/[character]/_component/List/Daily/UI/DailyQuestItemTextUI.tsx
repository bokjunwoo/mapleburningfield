import { Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import ExpObtainableTextUI from '../../../Typography/ExpObtainableTextUI';
import ExpUnableTextUI from '../../../Typography/ExpUnableTextUI';
import { DAILY_QUEST_ALL_REGIONS } from '@/app/constants/exp/daily';
import { findNearestQuestRegion } from '@/app/utils/exp';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  item: ExpectedExpRegion<ExpQuestContent>;
  characterLevel: number;
  isObtainable: boolean;
  warning: boolean;
};

const DailyQuestItemTextUI = ({
  item,
  characterLevel,
  isObtainable,
  warning,
}: Props) => {
  const expPercentage = calculateExpPercentage(characterLevel, item.exp);

  const nearestRegion = findNearestQuestRegion(
    characterLevel,
    DAILY_QUEST_ALL_REGIONS,
  );

  const primaryText = isObtainable ? (
    <ExpObtainableTextUI region={item.region} expPercentage={expPercentage} />
  ) : (
    <ExpUnableTextUI region={item.region} />
  );

  return (
    <Box width="100%">
      {primaryText}
      {warning && isObtainable && (
        <Typography
          variant="body2"
          color={red[400]}
          fontSize={10}
          fontWeight={600}
          lineHeight="10px"
        >{`${nearestRegion}에서 사냥 경험치가 더 좋습니다.`}</Typography>
      )}
    </Box>
  );
};

export default DailyQuestItemTextUI;
