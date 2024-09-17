import ExpPageContent from './_component/ExpPageContent';

type Props = {
  params: { character: string };
};

export async function generateMetadata({ params }: Props) {
  const characterName = decodeURIComponent(params.character);

  return {
    metadataBase: new URL('https://mapleburningfield.com/'),
    title: `${characterName} - 메할일 | 버닝필드`,
    description: `${characterName} 프로필`,
    openGraph: {
      title: `${characterName} - 메할일 | 버닝필드`,
      description: `${characterName} 프로필`,
      images: '/images/state/loading.jpg',
    },
  };
}

const ExpPage = async ({ params }: Props) => {
  const characterName = decodeURIComponent(params.character);

  return <ExpPageContent characterName={characterName} />;
};

export default ExpPage;
