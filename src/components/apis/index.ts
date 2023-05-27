import axios from 'axios';
import { url,boundsType } from '../Consts';
export const getPlacesData = async (sw:boundsType,ne:boundsType)=> {
    try{
        const options = {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude:ne.lng
              },
              headers: {
                'X-RapidAPI-Key': 'f074a64f16msh0b559fcfb6b71f4p1dc602jsn91bb5100c3bf',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        };
        const {data:{data}} = await axios.get(`${url}/restaurants/list-in-boundary`,options);
          
        return data;
    }catch(error){
        console.log(error);
    }
}