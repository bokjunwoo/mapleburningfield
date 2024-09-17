import { Box, Avatar, Typography } from '@mui/material';

type Props = {
  src: string;
  name: string;
};

const CharacterImageUI = ({ src, name }: Props) => {
  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Avatar src={src} alt={name} sx={{ width: 150, height: 150 }} />

      <Typography
        variant="body2"
        width={200}
        fontSize={20}
        fontWeight={500}
        textAlign="center"
        bgcolor="rgba(0, 0, 0, 0.8)"
        color="white"
        borderRadius={5}
        py={0.5}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default CharacterImageUI;
