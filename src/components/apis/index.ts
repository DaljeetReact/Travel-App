import axios from 'axios';
import { url,boundsType } from '../Consts';
export const getPlacesData = async (sw:boundsType,ne:boundsType,Type:string='restaurants')=> {
   
    try{
        const options = {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude:ne.lng
              },
              headers: {
                'X-RapidAPI-Key':`${process.env.REACT_APP_RapidAPI_Key}`,
                'X-RapidAPI-Host':`${process.env.REACT_APP_RapidAPI_Host}`
              }
        };
        const {data:{data}} = await axios.get(`${url}/${Type}/list-in-boundary`,options);
          
        return data;
    }catch(error){
        console.log(error);
    }
}