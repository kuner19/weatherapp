
import { rS, rV } from "@/src/style/responsive";
import { Stack } from "expo-router";
import { Text,SafeAreaView,View, Dimensions} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { bgSelect } from "@/src/style/bg_selector";
import SearchComponent from "@/src/components/SearchComponent/SearchComponent";
import WeatherComponent from "@/src/components/WeatherComponent/WeatherComponent";
import { useEffect, useState } from "react";
import fetchWeather from "@/src/service/get_weather";



const Home = () =>{
    const [weather, setWeather] = useState([''])
    const [forecast, setForecast] = useState([''])
    const [futureForcast, setFutureForecast] = useState([''])
    const [coordinates, setCoordinates] =useState<any>([''])


    useEffect(()=> {
        fetchWeather(coordinates)
    },[coordinates])

   const todayweather =  bgSelect('rainy')

    return  (

        <SafeAreaView>
         <Stack.Screen options={{headerTitle : "" , headerShown:false}}/>
         <LinearGradient
        // Button Linear Gradient
        colors={[todayweather?.bg1 || '',todayweather?.bg2 || '']}>
         <View className="p-[20] flex items-center" style={{height:rV(450)}}>

          <SearchComponent setCoordinates = {setCoordinates}/>
          <WeatherComponent/>
         </View>
         </LinearGradient>
      </SafeAreaView>

    )

}

Home.navigationOptions= {
    headerShown:false
}

export default Home