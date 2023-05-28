import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { placeType } from '../types';
import { Box, Chip, Rating } from '@mui/material';
import {LocalPhone,LocationOn} from '@mui/icons-material';
import useStyles from './style';
import { useEffect, useRef } from 'react';

export default function PlaceDetails({ place,selected,setRefs,elRef,index}: { place: placeType,selected:any,setRefs:any,index:number,elRef:any }) {
  const { name, photo } = place;
  let ImgUrl: string = photo ? photo.images.medium.url : 'https://www.kalypsofarms.com/wp-content/uploads/2019/08/dummy.png';
  const { classes } = useStyles(); 

  const CardRef = useRef(null);
  let arr:Array<any> = elRef;
       arr[index] = CardRef;
  useEffect(() => {
        setRefs(arr);
  }, [CardRef])
  
  return (
    <Card  ref={CardRef}>
      <CardMedia
        sx={{ height: 200 }}
        style={{ objectFit: 'contain' }}
        image={ImgUrl}
        title="green iguana"
      />
      <CardContent>
      <Typography gutterBottom variant="h5">{name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">{place.num_reviews} review{Number(place.num_reviews) >1&&'s'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOn />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <LocalPhone /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => window.open(place.web_url, '_blank')}>Trip Advisor</Button>
        <Button size="small" onClick={() => window.open(place.website, '_blank')}>Website</Button>
      </CardActions>
    </Card>
  );
}