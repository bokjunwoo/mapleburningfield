'use client';

import { Container, Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import NavLink from '../Box/Link/NavLink';
import GoogleFixedAdSense from '../Google/GoogleFixedAd';
import { characterInfoState } from '@/app/atoms/characterInfoState';

const Nav = () => {
  const pathname = usePathname();

  const characterInfo = useRecoilValue(characterInfoState);

  return (
    <Box>
      <Box bgcolor="#27282E">
        <Container maxWidth="xl">
          <NavLink pathname={pathname} value="/" text="메인" />

          <NavLink
            pathname={decodeURIComponent(pathname)}
            value={`/character/${characterInfo.character_name}`}
            text="사냥정보"
          />

          <NavLink
            pathname={decodeURIComponent(pathname)}
            value={`/exp/${characterInfo.character_name}`}
            text="메할일"
          />

          <NavLink pathname={pathname} value="/input" text="직접입력" />

          <NavLink pathname={pathname} value="/news" text="FAQ / 소식" />
        </Container>
      </Box>

      {pathname !== '/' ? (
        <Box height={90} mx={2} my={3}>
          <GoogleFixedAdSense />
        </Box>
      ) : null}
    </Box>
  );
};

export default Nav;
