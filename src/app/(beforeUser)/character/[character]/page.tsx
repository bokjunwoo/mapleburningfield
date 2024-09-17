import CharacterPageContent from './_compontent/CharacterPageContent';

type Props = {
  params: { character: string };
};

export async function generateMetadata({ params }: Props) {
  const characterName = decodeURIComponent(params.character);

  return {
    metadataBase: new URL('https://mapleburningfield.com/'),
    title: `${characterName} - 사냥터 정보 | 버닝필드`,
    description: `${characterName} 프로필`,
    openGraph: {
      title: `${characterName} - 사냥터 정보 | 버닝필드`,
      description: `${characterName} 프로필`,
      images: '/images/state/loading.jpg',
    },
  };
}

const CharacterPage = async ({ params }: Props) => {
  const characterName = decodeURIComponent(params.character);

  return <CharacterPageContent characterName={characterName} />;
};

export default CharacterPage;
