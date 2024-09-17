import { List, ListSubheader } from '@mui/material';

const RateListUI = ({ item }: { item: RateItem }) => {
  return (
    <List
      disablePadding
      sx={{
        bgcolor: `rgba(${item.bgcolor}, 0.05)`,
        border: `1px solid rgb(${item.bgcolor})`,
        borderRadius: 1,
      }}
      subheader={
        <ListSubheader
          disableSticky
          component="div"
          id="exp_subheader"
          sx={{
            bgcolor: `rgb(${item.bgcolor})`,
            color: 'white',
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          {item.label}
        </ListSubheader>
      }
    >
      {item.Components.map((Component, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <Component key={idx} />
      ))}
    </List>
  );
};

export default RateListUI;
