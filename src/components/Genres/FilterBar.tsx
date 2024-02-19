import { Typography, Grid, Radio, RadioGroup, FormControlLabel } from '@mui/material';

function FilterBar() {
  return (
    <Grid container direction="column" alignItems="left" sx={{width:"25%"}}>
      <Typography variant="h6" fontWeight="bold" id="search-vertical-filter-panel-label">Filters</Typography>
      <Grid item container direction="column" alignItems="left">
        <Typography variant="subtitle1" fontWeight="bold">Price</Typography>
        <RadioGroup>
          <FormControlLabel value="inexpensive" control={<Radio />} label="$" />
          <FormControlLabel value="moderate" control={<Radio />} label="$$" />
          <FormControlLabel value="pricey" control={<Radio />} label="$$$" />
          <FormControlLabel value="ultra-high-end" control={<Radio />} label="$$$$" />
        </RadioGroup>
      </Grid>
      <Grid item container direction="column" alignItems="left">
        <Typography variant="subtitle1" fontWeight="bold">Suggested</Typography>
        <RadioGroup>
          <FormControlLabel value="open-now" control={<Radio />} label="Open Now" />
          <FormControlLabel value="reservations" control={<Radio />} label="Reservations" />
          <FormControlLabel value="waitlist" control={<Radio />} label="Waitlist" />
          <FormControlLabel value="delivery" control={<Radio />} label="Offers Delivery" />
          <FormControlLabel value="takeout" control={<Radio />} label="Offers Takeout" />
          <FormControlLabel value="good-for-dinner" control={<Radio />} label="Good for Dinner" />
        </RadioGroup>
      </Grid>
      <Grid item container direction="column" alignItems="left">
        <Typography variant="subtitle1" fontWeight="bold">Category</Typography>
        <RadioGroup>
          <FormControlLabel value="burgers" control={<Radio />} label="Burgers" />
          <FormControlLabel value="restaurants" control={<Radio />} label="Restaurants" />
          <FormControlLabel value="food" control={<Radio />} label="Food" />
          <FormControlLabel value="fast-food" control={<Radio />} label="Fast Food" />
        </RadioGroup>
        <Typography variant="subtitle1" fontWeight="semibold">
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>See all</a>
        </Typography>
      </Grid>
      <Grid item container direction="column" alignItems="left">
        <Typography variant="subtitle1" fontWeight="bold">Features</Typography>
        <RadioGroup>
          <FormControlLabel value="good-for-groups" control={<Radio />} label="Good for Groups" />
          <FormControlLabel value="has-tv" control={<Radio />} label="Has TV" />
          <FormControlLabel value="good-for-kids" control={<Radio />} label="Good for Kids" />
          <FormControlLabel value="free-wifi" control={<Radio />} label="Free Wi-Fi" />
        </RadioGroup>
        <Typography variant="subtitle1" fontWeight="semibold">
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>See all</a>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default FilterBar;
