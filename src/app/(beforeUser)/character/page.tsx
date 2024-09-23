import FooterGoogleAdSense from '@/app/_component/Google/FooterGoogleAdSense';
import NavGoogleAdSense from '@/app/_component/Google/NavGoogleAdSense';
import ErrorPage from '@/app/Page/ErrorPage';

export const metadata = {
  metadataBase: new URL('https://mapleburningfield.com/'),
  title: '사냥터 정보 - 닉네임 입력 | 버닝필드',
  description: '캐릭터 닉네임 입력',
  openGraph: {
    title: '사냥터 정보 - 닉네임 입력 | 버닝필드',
    description: '캐릭터 닉네임 입력',
    images: '/images/state/loading.jpg',
  },
};

const CharacterPage = async () => {
  return (
    <ErrorPage
      title="사냥 정보"
      pathName="character"
      navChildren={<NavGoogleAdSense />}
      footerChildren={<FooterGoogleAdSense />}
    />
  );
};

export default CharacterPage;
