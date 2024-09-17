'use client';

import { Box } from '@mui/material';
import { useState } from 'react';
import FAQAccordionUI from './UI/FAQAccordionUI';
import { FAQList } from '@/app/data/FAQ';

const FAQAccordion = () => {
  const [expanded, setExpanded] = useState<number | false>(0);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box>
      {FAQList.map((item) => (
        <FAQAccordionUI
          key={item.id}
          item={item}
          expanded={expanded}
          handleChange={handleChange}
        />
      ))}
    </Box>
  );
};

export default FAQAccordion;
