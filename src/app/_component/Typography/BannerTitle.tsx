import { Typography, TypographyProps } from '@mui/material';

type Props = {
  text: string;
} & TypographyProps;

const BannerTitle = ({ text, ...props }: Props) => {
  return (
    <Typography
      variant="h6"
      fontSize={16}
      fontWeight={600}
      color="white"
      bgcolor="#24aad2"
      borderRadius={1}
      px={1.5}
      py={0.5}
      mb={1}
      {...props}
    >
      {text}
    </Typography>
  );
};

export default BannerTitle;
