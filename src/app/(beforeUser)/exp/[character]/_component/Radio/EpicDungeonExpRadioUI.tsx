import ExpDividerUI from '../Divider/ExpDividerUI';
import TooltipUI from '../Tooltip/RadioTooltipUI';
import ExpRadioControlUI from './UI/ExpRadioControlUI';
import ExpRadioFormUI from './UI/ExpRadioFormUI';

type Props = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const EpicDungeonExpRadioUI = ({ value, handleChange }: Props) => {
  return (
    <ExpRadioFormUI title="EXP보너스" value={value} handleChange={handleChange}>
      <TooltipUI title="기본 경험치 1배">
        <ExpRadioControlUI value="0" label="Lv.0" isSelected={value === '0'} />
      </TooltipUI>

      <ExpDividerUI />

      <TooltipUI title="기본 경험치 1배 + 추가 경험치 4배 (총 5배)">
        <ExpRadioControlUI
          value="400"
          label="Lv.1"
          isSelected={value === '400'}
        />
      </TooltipUI>

      <ExpDividerUI />

      <TooltipUI title="기본 경험치 1배 + 추가 경험치 8배 (총 9배)">
        <ExpRadioControlUI
          value="800"
          label="Lv.2"
          isSelected={value === '800'}
        />
      </TooltipUI>
    </ExpRadioFormUI>
  );
};

export default EpicDungeonExpRadioUI;
