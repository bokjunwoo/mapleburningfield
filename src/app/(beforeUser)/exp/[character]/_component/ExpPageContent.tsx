'use client';

import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import ExpContentUI from './Content/ExpContentUI';
import AcquisitionExpInfoGridUI from './Grid/AcquisitionExpInfoGridUI';
import ExpLayoutUI from './Layout/ExpLayoutUI';
import CharacterInfoUI from '@/app/_component/Box/Character/CharacterInfoUI';
import FooterGoogleAdSense from '@/app/_component/Google/FooterGoogleAdSense';
import NavGoogleAdSense from '@/app/_component/Google/NavGoogleAdSense';
import useCharacterData from '@/app/hooks/useCharacterData';
import ErrorPage from '@/app/Page/ErrorPage';
import LoadingPage from '@/app/Page/LoadingPage';

type Props = {
  characterName: string;
};

const ExpPageContent = ({ characterName }: Props) => {
  const { fetchCharacterData } = useCharacterData(characterName);

  const { isLoading, error } = useQuery({
    queryKey: ['character', characterName],
    queryFn: fetchCharacterData,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <LoadingPage characterName={characterName} />;

  if (error)
    return (
      <ErrorPage
        title="메할일"
        pathName="exp"
        navChildren={<NavGoogleAdSense />}
        footerChildren={<FooterGoogleAdSense />}
      />
    );

  return (
    <main>
      <NavGoogleAdSense />

      <ExpLayoutUI>
        <Box component="section">
          <CharacterInfoUI isTodo />
          <AcquisitionExpInfoGridUI />
        </Box>

        <Box component="section">
          <ExpContentUI />
        </Box>
      </ExpLayoutUI>

      <FooterGoogleAdSense />
    </main>
  );
};

export default ExpPageContent;
