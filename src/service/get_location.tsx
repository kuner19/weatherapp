import axios from 'axios'
import { Text } from 'react-native'




const fetchLocation = (loc:string) => {
    const API_URL = 'https://geocoding-api.open-meteo.com/v1/'
    
    const fetchData = async () => {
        try {
          const response = await axios.get(API_URL+`search?name=${loc}&count=10&language=en&format=json`);
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData()
}

export default fetchLocation