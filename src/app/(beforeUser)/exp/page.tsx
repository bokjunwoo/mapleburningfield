import ErrorPage from '@/app/Page/ErrorPage';

export const metadata = {
  metadataBase: new URL('https://mapleburningfield.com/'),
  title: '메할일 - 닉네임 입력 | 버닝필드',
  description: '캐릭터 닉네임 입력',
  openGraph: {
    title: '메할일 - 닉네임 입력 | 버닝필드',
    description: '캐릭터 닉네임 입력',
    images: '/images/state/loading.jpg',
  },
};

const CharacterPage = async () => {
  return <ErrorPage title="메할일" />;
};

export default CharacterPage;
