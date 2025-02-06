
import { rS, rV } from "@/src/style/responsive";
import { Stack } from "expo-router";
import { Text,SafeAreaView,View, Dimensions} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { bgSelect } from "@/src/style/bg_selector";
import SearchComponent from "@/src/components/SearchComponent/SearchComponent";
import WeatherComponent from "@/src/components/WeatherComponent/WeatherComponent";
import { useCallback, useEffect, useState } from "react";
import fetchWeather from "@/src/service/get_weather";



const Home = () =>{
    const [weather, setWeather] = useState<any>([])
    const [currentForecast, setCurrentForecast] = useState([''])
    const [futureForcast, setFutureForecast] = useState([''])
    const [coordinates, setCoordinates] =useState<any>({})
    

    useEffect(()=> {    
        if (Object.keys(coordinates).length !== 0){
            fetchWeather(coordinates).then((data)=>{
                setCurrentForecast(data.current)
                setWeather(bgSelect(data.current.weather_code,data.current.is_day))
            })
        }
           
    },[coordinates])

   
    // const we =  bgSelect(currentForecast.weather_code)

    return  (

        <SafeAreaView>
         <Stack.Screen options={{headerTitle : "" , headerShown:false}}/>
         <LinearGradient
        // Button Linear Gradient
        colors={[weather?.bg1 || '',weather?.bg2 || '']}>
         <View className="p-[20] flex items-center" style={{height:rV(450)}}>

          <SearchComponent setCoordinates = {setCoordinates}/>
          <WeatherComponent coordinates={coordinates} currentForecast={currentForecast}/>
         </View>
         </LinearGradient>
      </SafeAreaView>

    )

}

Home.navigationOptions= {
    headerShown:false
}

export default Home