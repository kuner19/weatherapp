import axios from 'axios'
import { Text } from 'react-native'
import { Location } from '../vars/location.interface'





const fetchLocation  = async (loc:string) => {
  const API_URL = 'https://geocoding-api.open-meteo.com/v1/'
    const location:any = []
    let items : Location
        try {
          const response = await axios.get(API_URL+`search?name=${loc}&count=10&language=en&format=json`);
          
          if (response.data.results){

             response.data.results.map((item:any,index:any)=> (


              location.push(items ={
                name :item.name,
                country :item.country,
                admin1:item.admin1 || '',
                longitude : item.longitude,
                latitude : item.latitude
              })
            ))
              return location
          }
         
          

        } catch (error) {
          console.error('Error fetching data:', error);
        }
}

export default fetchLocation