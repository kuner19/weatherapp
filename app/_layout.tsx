import { Stack } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {useFonts} from 'expo-font';
import { Text } from "react-native";
import * as Splashscreen from 'expo-splash-screen';
import "../global.css"
import * as Location from 'expo-location'
import fetchWeather from "@/src/service/get_weather";
import AsyncStorage from '@react-native-async-storage/async-storage';

Splashscreen.preventAutoHideAsync()

const Layout = () => {

    const [location, setLocation] = useState<Location.LocationObject | null>(null);

    // useEffect(()=>{
    //     async function getCurrentLocation() {
      
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== 'granted') {
    //           return;
    //         }
      
    //         let location = await Location.getCurrentPositionAsync({});
    //         console.log(location,'layout')
    //         setLocation(location);

            
    //       }
  
          
    //     getCurrentLocation()
    // },[])

    
    const [loaded,error] = useFonts({
        // Inter: require('../assets/fonts/Inter.ttf'),
        // Robot : require('../assets/fonts/Roboto-Light.ttf')
        'JosefinSlab': require('../assets/fonts/JosefinSlab-Regular.ttf')
    })



    // const onLayoutRootView = useEffect(async ()=>{
    //     if (loaded || error){



    //         await Splashscreen.hideAsync()
    //     }
    //     Splashscreen.hideAsync()
    // },[loaded , error])
   

   



    const onLayoutRootView = useEffect(()=>{
        if (loaded){
            Splashscreen.hideAsync()
            // (async () => {

            //     const userLocation =  Location.reverseGeocodeAsync({
            //         latitude: location.coords.latitude,
            //         longitude: location.coords.longitude
            //     }).then((data)=>{
            //         if (userLocation !== null){
            //             const coordinates = {
            //              name : data[0].city,
            //              country: data[0].country,
            //              longitude:location.coords.longitude,
            //              latitude: location.coords.latitude
            //             }
            //              try { 
     
            //                   AsyncStorage.setItem('coordinates', JSON.stringify(coordinates)).then(()=>{
            //                     console.log(coordinates,'layout')
            //                      Splashscreen.hideAsync()
            //                  })
                             
            //              } catch (e) {
            //              }
            //          }

            //     })

                
                
            //  })();
           
        }
       
        
    },[loaded])



    if (!loaded){
        // Splashscreen.hideAsync()
        return null
    }  
    return <Stack onLayout =  { onLayoutRootView } />
}


export default Layout;