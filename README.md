

# implementation 
## Data fetching 
    google-map for showing map, and google place-api for searching places and Rapid api platform for fetching data from Travel Advisor 
    
## Designing 
    MUI library and css

## Data sharing between component 
for sharing data between component i used  Prop drilling method

# Working
in this app you able able to check all the hotels,restaurant and attractions in single app you and auto able to find anywhere in the work with the help of search bar in header, the app has the capability to get the place when you try to change or scroll to map to any direction, it will provide you new location base on type

# Download and Run
githubLink : https://github.com/DaljeetReact/Travel-App


## Installation

Install my-project with npm

```bash
  cd Travel-App
  npm Install
  npm start
```

### create account in https://rapidapi.com/ 

Enable Travel Advisor Api in your account

### create account in https://console.cloud.google.com/getting-started

Create new api key under credientails, enable library javasctipy map and place api under library section 

create new .env fle
```env
REACT_APP_RapidAPI_Key=
REACT_APP_RapidAPI_Host=
REACT_APP_GOOGLEKEY=
```
[![Watch the video](/Screenshot.png)](/Google%20Travel%20App.mp4)