
import { Grid, Typography, Link, FormGroup, FormControlLabel, Checkbox, FormControl, RadioGroup, Rating, Box } from '@mui/material';

const Product = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ margin: '12px' }}>
          <Typography variant="h5" color="secondary" sx={{ textDecoration: 'underline' }} fontWeight="bold">
            Deals
          </Typography>
          <Link href="#" underline="hover" fontSize={20} display="block">
            Daily deals
          </Link>
          <Link href="#" underline="hover" fontSize={20} display="block">
            Most Popular
          </Link>
          <Link href="#" underline="hover" fontSize={20} display="block">
            Flash Sales
          </Link>
          <Typography variant="h5" color="secondary" sx={{ textDecoration: 'underline' }} fontWeight="bold" marginTop={3}>
            Category
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Electronics" />
            <FormControlLabel control={<Checkbox />} label="Fashion" />
            <FormControlLabel control={<Checkbox />} label="Home & Kitchen" />
            <FormControlLabel control={<Checkbox />} label="Beauty & Health" />
            <FormControlLabel control={<Checkbox />} label="Books & Office" />
            <FormControlLabel control={<Checkbox />} label="Toys & Kids" />
            <FormControlLabel control={<Checkbox />} label="Sports & Outdoors" />
            <FormControlLabel control={<Checkbox />} label="Automotive" />
          </FormGroup>
          <Typography variant="h5" color="secondary" sx={{ textDecoration: 'underline' }} fontWeight="bold" marginTop={3}>
            Prices
          </Typography>
          <FormControl>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="100" name="radio-buttons-group">
              <FormControlLabel value="100" control={<Checkbox />} label="Under $100" />
              <FormControlLabel value="200" control={<Checkbox />} label="Under $200" />
              <FormControlLabel value="300" control={<Checkbox />} label="Under $300" />
              <FormControlLabel value="400" control={<Checkbox />} label="Under $400" />
              <FormControlLabel value="500" control={<Checkbox />} label="Under $500" />
            </RadioGroup>
          </FormControl>
          <Link href="#">
            <Typography variant="h5" color="secondary" sx={{ textDecoration: 'underline' }} fontWeight="bold" marginTop={3} padding={'5px'}>
              Rating
              </Typography>
            <Box sx={{
              display:"block"
            }}>
            <Rating name="read-only" value={5} readOnly />
            </Box>
            </Link>
          <Link href="#">
            <Box sx={{
              display:"block"
            }}>
            <Rating name="read-only" value={4} readOnly />
            </Box>
            </Link>
          <Link href="#">
            <Box sx={{
              display:"block"
            }}>
            <Rating name="read-only" value={3} readOnly />
            </Box>
            </Link>
          <Link href="#">
            <Box sx={{
              display:"block"
            }}>
            <Rating name="read-only" value={2} readOnly />
            </Box>
            </Link>
          <Link href="#">
            <Box sx={{
              display:"block"
            }}>
            <Rating name="read-only" value={1} readOnly />
            </Box>
            </Link>
          
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
       <Grid item xs={8} ></Grid>

        </Grid>
      </Grid>
    </>
  );
};

export default Product;
