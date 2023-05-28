import { CssBaseline, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Header, List, Map } from './components';
import { boundsType } from './components/Consts';
import { getPlacesData } from './components/apis';
import { propType } from './components/types';

function App() {
  const [Places, setPlaces] = useState<propType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ChildClicked, setonChildClicked] = useState(null);
  const [coordinate, setCoordinate] = useState({lat:0,lng:0});
  const [bounds, setBounds] = useState<boundsType|any>({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=> {
      setCoordinate({lat:latitude,lng:longitude});
    })  
  }, []);
  
  useEffect(() => {
    setIsLoading(true);
    if(!isLoading) {
      getPlacesData(bounds.sw,bounds.ne).then((data:any) => {
        setPlaces(data);
        setIsLoading(false);  
      })
    }
  }, [coordinate,bounds]);
  
  return (<>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={1} style={{width: '100%'}}> 
        <Grid item xs={12} md={4}>
          {Places?.length&&(
            <List Places={Places} isLoading={isLoading} ChildClicked={ChildClicked} />
          )}
        </Grid>
        <Grid item xs={12} md={8}>
            <Map
              setCoordinate={setCoordinate}
              setBounds={setBounds}
              bounds={bounds}
              coordinate={coordinate}
              Places={Places}
              setonChildClicked={setonChildClicked}
            />
        </Grid>     
    </Grid>
  </>);
}
export default App;
