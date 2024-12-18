import { useRecoilValue } from 'recoil';
import ExpContentListUI from '../../common/ExpContentListUI';
import ExtremeParkListItemUI from '../../Daily/UI/ExtremeParkListItemUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';

type Props = {
  title: ExpContentTitle;
  characterLevel: number;
};

const ExtremeParkListUI = ({ title, characterLevel }: Props) => {
  const expectedExpRegion = useRecoilValue<
    ExpectedExpRegion<ExtremeParkRegion>[]
  >(expectedExpRegionState(title));

  return (
    <ExpContentListUI
      title={title}
      characterLevel={characterLevel}
      icon="익스트림 몬스터파크"
    >
      {expectedExpRegion.map((item) => (
        <ExtremeParkListItemUI
          key={item.region}
          item={item}
          title={title}
          characterLevel={characterLevel}
        />
      ))}
    </ExpContentListUI>
  );
};

export default ExtremeParkListUI;
