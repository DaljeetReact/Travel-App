import GoogleMapReact from 'google-map-react';
import { Paper, Rating, Typography, useMediaQuery } from '@mui/material';
import useStyles from './Styles'
import { propType } from '../types';
import {LocationOn} from '@mui/icons-material';
const MyCustomComponent = ({ className, lat, lng, children }:{
  className: string;
  lat: number;
  lng: number;
  children: React.ReactNode;
}) => {
  return (
    <div className={className} {...({ lat, lng } as any)}>
    {children}
  </div>
  );
};
function Map({Places,setCoordinate,coordinate,setBounds,bounds,setonChildClicked}:{Places:propType,setCoordinate:any,coordinate:any,setBounds:any,bounds:{lat:number,lng:number},setonChildClicked:any}) {
  const isDesktop = useMediaQuery(`(min-width:600px)`);
  const {classes} = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLEKEY}`}}
        defaultCenter={coordinate}
        center={coordinate}
        defaultZoom={14}
        onChange={(e) => {
          setCoordinate({lat:e.center.lat,lng:e.center.lng})
          setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
        }}
        onChildClick={(child) =>setonChildClicked(child)}
      >
          {Places?.map((place, i) => (
          <MyCustomComponent
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop
              ? <LocationOn color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className={classes.pointer}
                    alt={place.name}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </MyCustomComponent>
        ))}
      </GoogleMapReact>
    </div>
  
  )
}

export default Map