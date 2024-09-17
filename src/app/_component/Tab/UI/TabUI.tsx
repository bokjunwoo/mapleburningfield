import { Box, Tab, Tabs } from '@mui/material';
import { grey } from '@mui/material/colors';

type Props = {
  value: string;
  contents: string[];
  handleChange: (event: React.SyntheticEvent, newValue: Area) => void;
  fontSize: number;
};

const TabUI = ({ value, contents, handleChange, fontSize }: Props) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label={`tabs_${value}`}
        sx={{
          '& .MuiTabs-indicator': { backgroundColor: grey[900] },
        }}
      >
        {contents.map((content) => (
          <Tab
            key={content}
            label={content}
            value={content}
            sx={{
              '&.Mui-selected': { color: grey[900] },
              fontSize,
              fontWeight: 500,
              mr: 1,
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabUI;
