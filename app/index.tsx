
import { rMS, rS, rV } from "@/src/style/responsive";
import { Stack } from "expo-router";
import { Text,SafeAreaView,View, Dimensions, FlatList, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import SearchComponent from "@/src/components/SearchComponent/SearchComponent";
import WeatherComponent from "@/src/components/WeatherComponent/WeatherComponent";
import { useCallback, useEffect, useState } from "react";
import fetchWeather from "@/src/service/get_weather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from 'expo-location'
import { bgSelect } from "@/src/vars/variable";
import styles from "@/src/components/SearchComponent/style";
import { ActivityIndicator } from "react-native";
import LottieView from "lottie-react-native";
import images from "@/src/style/images";


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
                console.log(location,'layout')
            
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
    

    

    

    useEffect(()=> {    

        setIsLoading(true)
        if (Object.keys(coordinates).length !== 0){
            fetchWeather(coordinates.latitude, coordinates.longitude).then((data)=>{
                setCurrentForecast(data.current)
                setWeather(bgSelect(data.current.weather_code,data.current.is_day))

                console.log('yes')
                setIsLoading(false)
            })
        }
           
    },[coordinates])



    // if (isLoading){
    //     return(
    //         <SafeAreaView style={styles().loadingContainer}>
    //              <Stack.Screen options={{headerTitle : "" , headerShown:false}}/>
    //                 <ActivityIndicator size='large' color='#031716'>
                        
    //                 </ActivityIndicator>
    //         </SafeAreaView>
    //     )
    // }
 

    

    return  (

        <SafeAreaView>
         <Stack.Screen options={{headerTitle : "" , headerShown:false}}/>
         <LinearGradient
        // Button Linear Gradient
        colors={[weather?.bg1 || '',weather?.bg2 || '']}>
         <View className="p-[20] flex items-center" style={{height:rV(450)}}>
            {isLoading ? 
            
            <View style={{height:'100%',width:'100%',alignContent:'center',display:'flex', justifyContent:'center'}}>
                 <ActivityIndicator size='large' color='#031716'/>
            </View>
            :
            <>
                  <SearchComponent setCoordinates = {setCoordinates}/>
                  <WeatherComponent coordinates={coordinates} currentForecast={currentForecast}/>
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