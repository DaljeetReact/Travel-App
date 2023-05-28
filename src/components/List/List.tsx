import { useState,useRef,useEffect, Ref } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { placeType, propType } from '../types';
import useStyles from './Styles';
import CircularProgress from '@mui/material/CircularProgress';
function List({Places,isLoading,ChildClicked,setType,Type,setRating,Rating}:{Places:propType,isLoading:boolean,ChildClicked:any,setType:any,Type:string,setRating:any,Rating:any}) {
  const { classes } = useStyles();
  const [elRef, setRefs] = useState<any>([]);

  useEffect(() => {
    elRef[ChildClicked]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  },[ChildClicked]);


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
            <MenuItem value={0}><StarIcon fontSize='small'/> 0</MenuItem>
            <MenuItem value={1}><StarIcon fontSize='small'/> 1</MenuItem>
            <MenuItem value={2}><StarIcon fontSize='small'/> 2</MenuItem>
            <MenuItem value={3}><StarIcon fontSize='small'/> 3</MenuItem>
            <MenuItem value={4}><StarIcon fontSize='small'/> 4</MenuItem>
            <MenuItem value={5}><StarIcon fontSize='small'/> 5</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
      <Grid container spacing={3} className={classes.list}>

      {isLoading?(
        <Box  margin={'auto'}>
          <CircularProgress/>
        </Box>
        ):(
          <>
           {Places?.map((place:placeType,i:number) =>(
            <Grid item key={i} xs={12} mx={1}>
               <PlaceDetails place={place} 
                selected={(ChildClicked) === i} 
                setRefs={setRefs}
                elRef={elRef}
                index={i}
              />
            </Grid>
          ))}
          </>
        )}
      </Grid>
    </div>
  )
}

export default List