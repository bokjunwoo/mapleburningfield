'use client';

import { Box } from '@mui/material';
import { useState } from 'react';
import HistoryAccordionUI from './UI/HistoryAccordionUI';
import { historyList } from '@/app/data/history';

const HistoryAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(historyList[0].date);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box>
      {historyList.map((history) => (
        <HistoryAccordionUI
          key={history.id}
          history={history}
          expanded={expanded}
          handleChange={handleChange}
        />
      ))}
    </Box>
  );
};

export default HistoryAccordion;
