import ExpDividerUI from '../Divider/ExpDividerUI';
import RadioTooltipUI from '../Tooltip/RadioTooltipUI';
import ExpRadioControlUI from './UI/ExpRadioControlUI';
import ExpRadioFormUI from './UI/ExpRadioFormUI';

type Props = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const MonsterParkRadioUI = ({ value, handleChange }: Props) => {
  return (
    <ExpRadioFormUI
      title="추가 경험치"
      value={value}
      handleChange={handleChange}
    >
      <RadioTooltipUI title="기본 경험치 1배">
        <ExpRadioControlUI value="0" label="기본" isSelected={value === '0'} />
      </RadioTooltipUI>

      <ExpDividerUI />

      <RadioTooltipUI title="기본 경험치 1배 + 일요일 추가 경험치 0.5배 (총 1.5배)">
        <ExpRadioControlUI
          value="50"
          label="일요일"
          isSelected={value === '50'}
        />
      </RadioTooltipUI>

      <ExpDividerUI />

      <RadioTooltipUI title="기본 경험치 1배 + 일요일 추가 경험치 0.5배 + 썬데이 추가 경험치 2.5배 (총 4배)">
        <ExpRadioControlUI
          value="300"
          label="썬데이"
          isSelected={value === '300'}
        />
      </RadioTooltipUI>
    </ExpRadioFormUI>
  );
};

export default MonsterParkRadioUI;
