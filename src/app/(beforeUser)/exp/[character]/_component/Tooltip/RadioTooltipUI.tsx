import { Box, Tooltip, tooltipClasses } from '@mui/material';

type Props = {
  title: string;
  children: React.ReactNode;
};

const RadioTooltipUI = ({ title, children }: Props) => {
  return (
    <Tooltip
      title={title}
      placement="bottom"
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
                marginTop: '-70px',
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
              {
                marginBottom: '0px',
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
              {
                marginLeft: '0px',
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
              {
                marginRight: '20px',
              },
          },
        },
      }}
    >
      <Box>{children}</Box>
    </Tooltip>
  );
};

export default RadioTooltipUI;
