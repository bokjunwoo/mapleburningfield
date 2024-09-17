import InputPageContent from './_component/InputPageContent';

export const metadata = {
  metadataBase: new URL('https://mapleburningfield.com/'),
  title: 'FAQ/소식 | 버닝필드',
  description: 'FAQ',
  openGraph: {
    title: '직접입력 - 사냥터 정보 | 버닝필드',
    description: '사냥터 정보 직접 입력',
    images: '/images/og_image.png',
  },
};

const InputPage = () => {
  return <InputPageContent />;
};

export default InputPage;
