import axios from 'axios'
import { Text } from 'react-native'



interface Location {
  name:string,
  country:string,
  long:number,
  lat: number
}


const fetchWeather  = async (coords:Location) => {

  const API_URL = 'https://api.open-meteo.com/v1/'
    const location:any = []
    let items : Location
        try {
          const response = await axios.get(API_URL+`forecast?latitude=${coords.lat}&longitude=${coords.long}&current=temperature_2m,relative_humidity_2m,is_day,rain,weather_code,wind_speed_10m&hourly=precipitation_probability&precipitation_unit=inch`);
          if (response.data){
            return response.data
          }
         
          

        } catch (error) {
          console.error('Error fetching data:', error);
        }
}

export default fetchWeather