import { Tooltip, tooltipClasses, Box } from '@mui/material';
import ExpDescriptionBoxUI from '../Box/Exp/ExpDescriptionBoxUI';

type Props = {
  character: CharacterInfoBase;
  children: React.ReactNode;
};

const ExpDescriptionTooltipUI = ({ character, children }: Props) => {
  return (
    <Tooltip
      title={<ExpDescriptionBoxUI character={character} />}
      placement="left"
      slotProps={{
        tooltip: {
          sx: {
            border: 'ridge white',
            bgcolor: 'rgba(0, 0, 0, 0.8)',
          },
        },
        popper: {
          sx: {
            [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
              {
                marginTop: '0px',
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
              {
                marginBottom: '0px',
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
              {
                marginLeft: '-20px',
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
              {
                marginRight: '0px',
              },
          },
        },
      }}
    >
      <Box>{children}</Box>
    </Tooltip>
  );
};

export default ExpDescriptionTooltipUI;
