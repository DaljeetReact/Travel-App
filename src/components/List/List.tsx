import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Box } from '@mui/material';
import useStyles from './Styles'
import PlaceDetails from '../PlaceDetails/PlaceDetails';
function List({Places}:any) {
  const { classes } = useStyles();
  const [Type, setType] = useState('restaurants')
  const [Rating, setRating] = useState('')

  return (
    <div className={classes.container}>
      <Typography variant="h6" mb={3}>Restaurants,Hotels & Attractions</Typography>
      <Box display={'flex'}>
        <FormControl fullWidth>
          <InputLabel id="selectType" >Type</InputLabel>
          <Select value={Type} onChange={(e) => setType(e.target.value)}
            labelId='selectType'
            label="Type"
            className={classes.formControl}
          >
            <MenuItem value={'restaurants'}>Restaurants</MenuItem>
            <MenuItem value={'hotels'}>Hotels</MenuItem>
            <MenuItem value={'attractions'}>Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="Rating" >Rating</InputLabel>
          <Select value={Rating} onChange={(e) => setRating(e.target.value)}
            labelId='Rating'
            label="Rating"
            className={classes.formControl}
          >
            <MenuItem value={'0'}><StarIcon fontSize='small'/> 0</MenuItem>
            <MenuItem value={'1'}><StarIcon fontSize='small'/> 1</MenuItem>
            <MenuItem value={'2'}><StarIcon fontSize='small'/> 2</MenuItem>
            <MenuItem value={'3'}><StarIcon fontSize='small'/> 3</MenuItem>
            <MenuItem value={'4'}><StarIcon fontSize='small'/> 4</MenuItem>
            <MenuItem value={'5'}><StarIcon fontSize='small'/> 5</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
      <Grid container spacing={3} className={classes.list}>
          {Places?.map((item:any,i:any) =>(
            <Grid item key={i} xs={12}>
               <PlaceDetails place={item} />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default List