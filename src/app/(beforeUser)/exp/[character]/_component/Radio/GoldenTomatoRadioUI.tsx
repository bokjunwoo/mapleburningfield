import ExpDividerUI from '../Divider/ExpDividerUI';
import ExpRadioControlUI from './UI/ExpRadioControlUI';
import ExpRadioFormUI from './UI/ExpRadioFormUI';

type Props = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const GoldenTomatoRadioUI = ({ value, handleChange }: Props) => {
  return (
    <ExpRadioFormUI
      title="황금 토마토 입장권"
      value={value}
      handleChange={handleChange}
    >
      <ExpRadioControlUI
        value="0"
        label="미사용"
        isSelected={value === '미사용'}
      />

      <ExpDividerUI />

      <ExpRadioControlUI
        value="이용권 사용"
        label="사용"
        isSelected={value === '사용'}
      />
    </ExpRadioFormUI>
  );
};

export default GoldenTomatoRadioUI;
