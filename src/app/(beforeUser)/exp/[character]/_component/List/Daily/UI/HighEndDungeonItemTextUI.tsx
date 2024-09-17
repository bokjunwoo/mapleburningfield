import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import MonsterParkCountButton from '@/app/_component/Button/MonsterParkCountButton ';
import { truncateToFixed } from '@/app/utils/format';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  item: ExpectedExpRegion<MonsterParkRegion>;
  count: number;
  increment: () => void;
  decrement: () => void;
  characterLevel: number;
};

const HighEndDungeonItemTextUI = ({
  item,
  count,
  increment,
  decrement,
  characterLevel,
}: Props) => {
  const expPercentage = calculateExpPercentage(
    characterLevel,
    item.exp * count,
  );

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography
        component="span"
        variant="body2"
        color={grey[800]}
        fontWeight={500}
        lineHeight="24px"
      >
        {item.region}
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
          <MonsterParkCountButton
            count={count}
            increment={increment}
            decrement={decrement}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HighEndDungeonItemTextUI;
