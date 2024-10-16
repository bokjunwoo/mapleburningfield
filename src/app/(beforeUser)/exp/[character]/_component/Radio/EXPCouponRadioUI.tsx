import ExpDividerUI from '../Divider/ExpDividerUI';
import ExpRadioControlUI from './UI/ExpRadioControlUI';
import ExpRadioFormUI from './UI/ExpRadioFormUI';

type Props = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  characterLevel: number;
};

const EXPCouponRadioUI = ({ value, handleChange, characterLevel }: Props) => {
  return (
    <ExpRadioFormUI
      title="EXP 교환권"
      value={value}
      handleChange={handleChange}
    >
      <ExpRadioControlUI value="0" label="미사용" isSelected={value === '0'} />

      <ExpDividerUI />

      {characterLevel >= 260 ? (
        <>
          <ExpRadioControlUI
            value="상급 EXP"
            label="상급 EXP"
            isSelected={value === '상급 EXP'}
            disabled={characterLevel < 260 && true}
          />
          <ExpDividerUI />
          <ExpRadioControlUI
            value="기본 EXP"
            label="기본 EXP"
            isSelected={value === '기본 EXP'}
          />
        </>
      ) : (
        <>
          <ExpRadioControlUI
            value="기본 EXP"
            label="기본 EXP"
            isSelected={value === '기본 EXP'}
          />
          <ExpDividerUI />
          <ExpRadioControlUI
            value="상급 EXP"
            label="상급 EXP"
            isSelected={value === '상급 EXP'}
            disabled={characterLevel < 260 && true}
          />
        </>
      )}
    </ExpRadioFormUI>
  );
};

export default EXPCouponRadioUI;
