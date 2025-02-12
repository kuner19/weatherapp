
import { Stack } from "expo-router";
import { SafeAreaView,View} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import SearchComponent from "@/src/components/SearchComponent/SearchComponent";
import WeatherComponent from "@/src/components/WeatherComponent/WeatherComponent";
import { useCallback, useEffect, useState } from "react";
import fetchWeather from "@/src/service/get_weather";
import * as Location from 'expo-location'
import { bgSelect } from "@/src/vars/variable";
import { ActivityIndicator } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FutureForecastComponent from "@/src/components/FutureForecastComponent/FutureForecastComponent";
import moment from 'moment'

const Home = () =>{
    const [weather, setWeather] = useState<any>([])
    const [currentForecast, setCurrentForecast] = useState([])
    const [futureForcast, setFutureForecast] = useState([''])
    const [coordinates, setCoordinates] =useState<any>({})
    const [isLoading, setIsLoading] = useState(true)
    // Load weather based on user device location





    useEffect(()=> {
        (async () => {
            
            let { status } = await Location.requestForegroundPermissionsAsync();
                        if (status !== 'granted') {
                          return;
                        }
                  
           let location = await Location.getCurrentPositionAsync({});
            
            const userLocation = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            }).then((data)=>{
                const coordinates = {
                    name : data[0].city,
                    country: data[0].country,
                    longitude:location.coords.longitude,
                    latitude: location.coords.latitude
                   }

                   setCoordinates(coordinates)
            })
        })();
    },[])
    

    

    
    const createFlatlist = (hourly:any,percentage:any) => {

        const percentages =percentage ?? [];
         const times = hourly ?? [];

        const flatData =percentages.map((value:any, index:any) => ({
            percentage: value,
            time: moment(times[index]).format('LT')
          }));
         setFutureForecast(flatData)
    }


    useEffect(()=> {    

        setIsLoading(true)
        if (Object.keys(coordinates).length !== 0){
            fetchWeather(coordinates.latitude, coordinates.longitude).then((data)=>{
                setCurrentForecast(data.current)
                createFlatlist(data.hourly.time.slice(0,24),data.hourly.precipitation_probability.slice(0,24))
                setWeather(bgSelect(data.current.weather_code,data.current.is_day))
                setIsLoading(false)
            })
        }
           
    },[coordinates])


   

    return  (

        <SafeAreaView>
         <Stack.Screen options={{headerTitle : "" , headerShown:false}}/>
         <LinearGradient
        // Button Linear Gradient
        colors={[weather?.bg1 || '#0057D9',weather?.bg2 || '#2C0781']}>
         <View className="p-[20] flex items-center" style={{height:hp(70)}}>
            {isLoading ? 
            
            <View style={{height:'100%',width:'100%',alignContent:'center',display:'flex', justifyContent:'center'}}>
                 <ActivityIndicator size='large' color='#031716'/>
            </View>
            :
            <>
                  <SearchComponent setCoordinates = {setCoordinates}/>
                  <WeatherComponent coordinates={coordinates} currentForecast={currentForecast}/>
                  <FutureForecastComponent future_data = {futureForcast}/>
            </>
      
            }
          
         </View>
         </LinearGradient>
      </SafeAreaView>

    )

}

Home.navigationOptions= {
    headerShown:false
}

export default Home