import React, { useState,useEffect } from 'react';
import { CssBaseline,Grid } from '@mui/material';
import {Header,Map,List} from './components'
import {getPlacesData}   from './components/apis';
import {boundsType } from './components/Consts';
function App() {
  const [Places, setPlaces] = useState([]);
  const [coordinate, setCoordinate] = useState({lat:0,lng:0});
  const [bounds, setBounds] = useState<boundsType|any>({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=> {
      setCoordinate({lat:latitude,lng:longitude});
    })  
  }, []);

  useEffect(() => {
    getPlacesData(bounds.sw,bounds.ne).then((data:any) => {
      setPlaces(data);
    })
  }, [coordinate,bounds]);
  console.log({Places,coordinate,bounds});
  
  return (<>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={3} style={{width: '100%'}}> 
        <Grid item xs={12} md={4}>
          <List Places={Places} />
        </Grid>
        <Grid item xs={12} md={8}>
            <Map
              setCoordinate={setCoordinate}
              setBounds={setBounds}
              bounds={bounds}
              coordinate={coordinate}
            />
        </Grid>
    </Grid>
  </>);
}
export default App;
