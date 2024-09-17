import { Container } from '@mui/material';

const BeforeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Container maxWidth="xl">{children}</Container>;
};

export default BeforeLayout;
