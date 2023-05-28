
import AppBar from '@mui/material/AppBar';
import {Box,Toolbar,Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {StyledInputBase,SearchIconWrapper,Search} from './Styles'
import { usePlacesWidget } from 'react-google-autocomplete';
import React from 'react';


export default function Header({setCoordinate,setAutocomplete}:{setAutocomplete:any,setCoordinate:any}) {

  const { ref: materialRef } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLEKEY,
    onPlaceSelected: (place:any) => {
      const lat = place.geometry?.location.lat();
      const lng = place.geometry?.location.lng();
      console.log({ lat, lng });
      setCoordinate({ lat, lng });
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Travel App
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              inputRef={materialRef}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}