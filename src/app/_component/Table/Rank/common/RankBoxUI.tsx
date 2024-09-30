import { Box, Typography } from '@mui/material';

type Props = {
  children: React.ReactNode;
  title: '일반' | '리부트';
};

const RankBoxUI = ({ children, title }: Props) => {
  const today = new Date();
  const formattedDate = today
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\.\s/g, '.')
    .replace(/\.$/, '');

  return (
    <Box
      border="1px solid #e0e0e0"
      borderBottom="none"
      bgcolor="white"
      borderRadius={1}
    >
      <Box display="flex" p={1}>
        <Typography
          variant="h6"
          fontSize={16}
          fontWeight={600}
          mr={1}
          alignSelf="flex-end"
        >
          종합 ({title}월드) 랭킹
        </Typography>

        <Typography
          variant="body2"
          fontSize={12}
          fontWeight={500}
          color="GrayText"
          mt={0.8}
        >
          ({formattedDate} 기준)
        </Typography>
      </Box>

      {children}
    </Box>
  );
};

export default RankBoxUI;
