import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@mui/material';
import useStyles from './Styles'
function Map({setCoordinate,setBounds,coordinate,bounds}:any) {
  const isMobile = useMediaQuery(`(min-width:600px)`);
  const {classes} = useStyles();
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBwQZWmYNj02EbjMD-GwdZj735RhF55KLo" }}
        defaultCenter={coordinate}
        center={coordinate}
        defaultZoom={5}
        onChange={(e) => {
          setCoordinate({lat:e.center.lat,lng:e.center.lng})
          setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
        }}
        onChildClick={() => {}}
      >
      </GoogleMapReact>
    </div>
  
  )
}

export default Map