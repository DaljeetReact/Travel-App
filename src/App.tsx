import { CssBaseline, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Header, List, Map } from './components';
import { boundsType } from './components/Consts';
import { getPlacesData } from './components/apis';
import { propType } from './components/types';

function App() {
  const [Places, setPlaces] = useState<propType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [Type, setType] = useState('restaurants');
  const [ChildClicked, setonChildClicked] = useState(null);
  const [coordinate, setCoordinate] = useState({lat:0,lng:0});
  const [bounds, setBounds] = useState<boundsType|any>({});
  const [Rating, setRating] = useState(5)
  const [FilteredPlaces, setFilteredPlaces] = useState<propType>([]);
  useEffect(() => {
    const filtered = Places.filter((Place) => Number(Place.rating) > Rating);
    setFilteredPlaces(filtered);
  }, [Rating]);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=> {
      setCoordinate({lat:latitude,lng:longitude});
    })  
  }, []);


  useEffect(() => {
    setIsLoading(true);
    if(!isLoading) {
      getPlacesData(bounds.sw,bounds.ne,Type).then((data:any) => {
        setPlaces(data);
        setIsLoading(false);  
        setRating(5);
      })
    }
  }, [Type]);
  
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
            <List Places={FilteredPlaces.length > 1?FilteredPlaces:Places} isLoading={isLoading} ChildClicked={ChildClicked} setType={setType} Type={Type} Rating={Rating} setRating={setRating}/>
          )}
        </Grid>
        <Grid item xs={12} md={8}>
            <Map
              setCoordinate={setCoordinate}
              setBounds={setBounds}
              bounds={bounds}
              coordinate={coordinate}
              Places={FilteredPlaces.length > 1?FilteredPlaces:Places}
              setonChildClicked={setonChildClicked}
            />
        </Grid>     
    </Grid>
  </>);
}
export default App;
