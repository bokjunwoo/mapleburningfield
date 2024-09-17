import { Avatar, Box, Tab, Tabs } from '@mui/material';

type Props = {
  value: string;
  contents: TabItem[];
  handleChange: (event: React.SyntheticEvent, newValue: Area) => void;
  fontSize: number;
};

const MapTabUI = ({ value, contents, handleChange, fontSize }: Props) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label={`tabs_${value}`}
        sx={{
          mt: -0.5,
          '& .MuiTabs-indicator': { backgroundColor: '#ddfe01' },
        }}
      >
        {contents.map((content) => (
          <Tab
            key={content.label}
            label={content.label}
            value={content.label}
            icon={
              content.isEvent === true ? (
                <Avatar
                  src="/images/state/hot.png"
                  alt="icon"
                  variant="square"
                  sx={{
                    width: 27,
                    height: 16,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    p: 0,
                    m: 0,
                  }}
                />
              ) : (
                <Box
                  width={27}
                  height={16}
                  position="absolute"
                  top={0}
                  left={0}
                />
              )
            }
            sx={{
              '&.Mui-selected': { color: '#ddfe01' },
              '&.MuiTab-root': { mt: 0.5, pt: 2 },
              fontSize,
              minHeight: 0,
              fontWeight: 500,
              mr: 1,
              color: '#929c4f',
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default MapTabUI;
