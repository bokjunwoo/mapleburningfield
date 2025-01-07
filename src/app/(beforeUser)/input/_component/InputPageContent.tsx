'use client';

import { Box } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import CharacterLevelInput from './Form/CharacterLevelInput';
import RateContent from '@/app/_component/Content/RateContent';
import RegionContent from '@/app/_component/Content/RegionContent';
import FooterGoogleAdSense from '@/app/_component/Google/FooterGoogleAdSense';
import NavGoogleAdSense from '@/app/_component/Google/NavGoogleAdSense';
import AreaTab from '@/app/_component/Tab/AreaTab';
import RegionTabUI from '@/app/_component/Tab/UI/RegionTabUI';
import useCharacterData from '@/app/hooks/useCharacterData';

const InputPageContent = () => {
  const queryClient = useQueryClient();

  const { resetData } = useCharacterData('');

  useEffect(() => {
    queryClient.clear();
    resetData();
  }, [queryClient, resetData]);

  return (
    <Box component="main" width="100%" height="100%">
      <NavGoogleAdSense />

      <Box component="section" py={3}>
        <CharacterLevelInput />
      </Box>

      <Box component="section">
        <RateContent />
      </Box>

      <Box component="section">
        <AreaTab />
        <RegionTabUI />
      </Box>

      <Box component="section">
        <RegionContent />
      </Box>

      <FooterGoogleAdSense />
    </Box>
  );
};

export default InputPageContent;
