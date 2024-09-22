'use client';

import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import CharacterInfoUI from '@/app/_component/Box/Character/CharacterInfoUI';
import RateContent from '@/app/_component/Content/RateContent';
import RegionContent from '@/app/_component/Content/RegionContent';
import FooterGoogleAdSense from '@/app/_component/Google/FooterGoogleAdSense';
import NavGoogleAdSense from '@/app/_component/Google/NavGoogleAdSense';
import AreaTab from '@/app/_component/Tab/AreaTab';
import RegionTabUI from '@/app/_component/Tab/UI/RegionTabUI';
import useCharacterData from '@/app/atoms/useCharacterData';
import ErrorPage from '@/app/Page/ErrorPage';
import LoadingPage from '@/app/Page/LoadingPage';

type Props = {
  characterName: string;
};

const CharacterPageContent = ({ characterName }: Props) => {
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
        title="사냥 정보"
        pathName="/character"
        navChildren={<NavGoogleAdSense />}
        footerChildren={<FooterGoogleAdSense />}
      />
    );

  return (
    <main>
      <NavGoogleAdSense />

      <Box component="section" py={3}>
        <CharacterInfoUI />
      </Box>

      <Box component="section">
        <RateContent />
      </Box>

      <Box component="section">
        <AreaTab />
      </Box>

      <Box component="section">
        <RegionTabUI />
      </Box>

      <Box component="section">
        <RegionContent />
      </Box>

      <FooterGoogleAdSense />
    </main>
  );
};

export default CharacterPageContent;
