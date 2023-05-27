import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { placeType } from '../types';

export default function PlaceDetails({ place }: { place: placeType }) {
  const { name, photo } = place;
  let ImgUrl: string = photo ? photo.images.medium.url : 'https://www.kalypsofarms.com/wp-content/uploads/2019/08/dummy.png';

  if (!place) {
    <div>No results found.</div>
  }
  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        style={{ objectFit: 'contain' }}
        image={ImgUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}