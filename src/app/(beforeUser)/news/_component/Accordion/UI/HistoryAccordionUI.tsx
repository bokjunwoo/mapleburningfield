import { AccordionDetails, Typography } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import { Accordion, AccordionSummary } from '../style/AccordionStyle';

type Props = {
  history: HistoryItem;
  expanded: string | false;
  handleChange: (
    panel: string,
  ) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
};

const HistoryAccordionUI = ({ history, expanded, handleChange }: Props) => {
  return (
    <Accordion
      expanded={expanded === history.date}
      onChange={handleChange(history.date)}
      sx={{
        '&:hover': {
          bgcolor: expanded === history.date ? 'inherit' : orange[50],
        },
      }}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>{history.date} 업데이트 안내</Typography>
      </AccordionSummary>
      {history.category.map((item) => (
        <AccordionDetails key={item.title} sx={{ mx: 3 }}>
          <Typography variant="subtitle1" fontWeight={500}>
            ■ {item.title}
          </Typography>
          {item.list.map((text) => (
            <Typography
              key={text}
              component="p"
              variant="body2"
              color={grey[700]}
              ml={2.5}
            >
              • {text}
            </Typography>
          ))}
        </AccordionDetails>
      ))}
    </Accordion>
  );
};

export default HistoryAccordionUI;
