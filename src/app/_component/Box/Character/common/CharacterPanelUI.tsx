import { Box, Typography } from '@mui/material';

type Props = {
  title: string;
  info: string | number;
  color?: string;
};

const CharacterPanelUI = ({ title, info, color }: Props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="rgba(117, 117, 117, 0.8)"
      color="white"
      borderRadius={5}
      py={0.5}
      mt={1}
    >
      <Typography
        variant="body2"
        fontSize={20}
        fontWeight={500}
        textAlign="center"
        ml={2}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        fontSize={20}
        fontWeight={500}
        textAlign="center"
        mr={2}
        color={color}
      >
        {info}
      </Typography>
    </Box>
  );
};

export default CharacterPanelUI;
