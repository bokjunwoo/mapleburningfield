import { List, ListItem, Box, Typography, Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import { totalExpectedExpSelector } from '@/app/atoms/expectedExpState';
import { extractWord, truncateToFixed } from '@/app/utils/format';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  title: ExpContentTitle;
  characterLevel: number;
  children: React.ReactNode;
  icon?: string;
};

const ExpContentListUI = ({ title, characterLevel, children, icon }: Props) => {
  const totalExp = useRecoilValue(totalExpectedExpSelector(title));

  const expPercentage = calculateExpPercentage(characterLevel, totalExp);

  return (
    <List sx={{ py: 0.5 }}>
      <ListItem
        sx={{
          px: 1.5,
          py: 0.5,
          border: `1px solid ${grey[400]}`,
          borderRadius: 1,
          bgcolor: grey[500],
        }}
      >
        <Box width="100%" py={0.5}>
          <Box display="flex" alignItems="center">
            <Avatar
              variant="rounded"
              src={`/images/title_icon/${icon || extractWord(title, 0)}.png`}
              alt={title}
              sx={{ width: 22, height: 22 }}
            />
            <Typography
              variant="h6"
              fontSize={18}
              color="white"
              fontWeight="bold"
              ml={0.5}
            >
              {title}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography
              component="span"
              variant="body2"
              fontSize={15}
              fontWeight={600}
              color="#ffeb3b"
            >
              경험치 획득 시 총합
            </Typography>
            <Typography
              component="span"
              variant="body2"
              fontSize={15}
              fontWeight={600}
              color="#ffeb3b"
            >
              {truncateToFixed(expPercentage, 3)}%
            </Typography>
          </Box>
        </Box>
      </ListItem>

      {children}
    </List>
  );
};

export default ExpContentListUI;
