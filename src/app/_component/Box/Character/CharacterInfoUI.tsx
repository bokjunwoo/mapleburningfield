'use client';

import CharacterPanelGridUI from '../../Grid/CharacterPanelGridUI';
import CharacterImageWrapperUI from './common/CharacterImageWrapperUI';
import CharacterToDoUI from '@/app/(beforeUser)/exp/[character]/_component/Box/Character/CharacteToDoUI';

type Props = {
  isTodo?: boolean;
};

const CharacterInfoUI = ({ isTodo = false }: Props) => {
  return (
    <CharacterImageWrapperUI>
      {isTodo && <CharacterToDoUI />}
      <CharacterPanelGridUI isTodo={isTodo} />
    </CharacterImageWrapperUI>
  );
};

export default CharacterInfoUI;
