
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
import DayForecast from "@/src/components/DayForecast/DayForecast";

const Home = () =>{
    const [weather, setWeather] = useState<any>([])
    const [currentForecast, setCurrentForecast] = useState([])
    const [futureForcast, setFutureForecast] = useState([''])
    const [coordinates, setCoordinates] =useState<any>({})
    const [isLoading, setIsLoading] = useState(true)
    const [daysForecast, setDaysForecast] = useState<any>([])
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
    

    

    
    const createFutureFlatlist = (hourly:any,percentage:any) => {

        const percentages =percentage ?? [];
         const times = hourly ?? [];

        const flatData =percentages.map((value:any, index:any) => ({
            percentage: value,
            time: moment(times[index]).format('LT')
          }));
         setFutureForecast(flatData)
    }

    const createDayFlatlist = (time:any,weather_code:any,temp:any,rain:any) => {

        const times = time ?? [];
        const weather_codes = weather_code ?? [];
        const temps = temp ?? [];
        const rains = rain ?? [];
        const flatData = times.map((value:any, index:any) => ({
            time: value,
            weather_code: weather_codes[index],
            temperature : temps[index],
            rain_percentage : rains[index]
          }));

        setDaysForecast(flatData)
    } 

    useEffect(()=> {    

        setIsLoading(true)
        if (Object.keys(coordinates).length !== 0){
            fetchWeather(coordinates.latitude, coordinates.longitude).then((data)=>{
                const current = data.current
                const hourly = data.hourly
                const daily = data.daily

                setCurrentForecast(current)
                createFutureFlatlist(hourly.time.slice(0,24),hourly.precipitation_probability.slice(0,24))
                createDayFlatlist(daily.time,daily.weather_code,daily.temperature_2m_max,daily.rain_sum)
                // setWeather(bgSelect(data.current.weather_code,data.current.is_day))
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
         <View style={{height:hp(30)}}>
           

            <DayForecast daysForecast={daysForecast}/>
   
        </View>
      </SafeAreaView>

    )

}

Home.navigationOptions= {
    headerShown:false
}

export default Home