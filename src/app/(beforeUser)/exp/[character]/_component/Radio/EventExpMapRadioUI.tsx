import ExpDividerUI from '../Divider/ExpDividerUI';
import ExpRadioControlUI from './UI/ExpRadioControlUI';
import ExpRadioFormUI from './UI/ExpRadioFormUI';

type Props = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const EventExpMapRadioUI = ({ value, handleChange }: Props) => {
  return (
    <ExpRadioFormUI
      title="햇살 생성기"
      value={value}
      handleChange={handleChange}
    >
      <ExpRadioControlUI value="0" label="참여 X" isSelected={value === '0'} />

      <ExpDividerUI />

      <ExpRadioControlUI
        value="햇살 미사용"
        label="햇살 X"
        isSelected={value === '햇살 미사용'}
      />

      <ExpDividerUI />

      <ExpRadioControlUI
        value="햇살 사용"
        label="햇살 O"
        isSelected={value === '햇살 사용'}
      />
    </ExpRadioFormUI>
  );
};

export default EventExpMapRadioUI;
