import { AccordionDetails, Typography } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import { Accordion, AccordionSummary } from '../style/AccordionStyle';

type Props = {
  item: FAQItem;
  expanded: number | false;
  handleChange: (
    panel: number,
  ) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
};

const FAQAccordionUI = ({ item, expanded, handleChange }: Props) => {
  return (
    <Accordion
      expanded={expanded === item.id}
      onChange={handleChange(item.id)}
      sx={{
        '&:hover': {
          bgcolor: expanded === item.id ? 'inherit' : orange[50],
        },
      }}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>
          Q{item.id}. {item.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ mx: 3 }}>
        <Typography component="p" variant="body2" color={grey[800]}>
          A{item.id}. {item.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQAccordionUI;
