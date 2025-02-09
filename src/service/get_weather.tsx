import axios from 'axios'
import { Text } from 'react-native'
import { Location } from '../vars/location.interface'





const fetchWeather  = async (lat:number,long:number) => {

  const API_URL = 'https://api.open-meteo.com/v1/'
    const location:any = []
    let items : Location
        try {
          const response = await axios.get(API_URL+`forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,is_day,rain,weather_code,wind_speed_10m&hourly=precipitation_probability&precipitation_unit=inch`);
          if (response.data){
            return response.data
          }
         
          

        } catch (error) {
          console.error('Error fetching data:', error);
        }
}

export default fetchWeather