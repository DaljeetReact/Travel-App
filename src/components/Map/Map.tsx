import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@mui/material';
import useStyles from './Styles'
function Map() {
  const isMobile = useMediaQuery(`(min-width:600px)`);
  const cordinates = {lat:0,lng:0};
  const {classes} = useStyles();
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBwQZWmYNj02EbjMD-GwdZj735RhF55KLo" }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={2}
        options={{}}
        onChange={() => {}}
        onChildClick={() => {}}
      >
      </GoogleMapReact>
    </div>
  
  )
}

export default Map