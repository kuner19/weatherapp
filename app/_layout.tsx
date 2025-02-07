import { Stack } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {useFonts} from 'expo-font';
import { Text } from "react-native";
import * as Splashscreen from 'expo-splash-screen';
import "../global.css"
import * as Location from 'expo-location'

Splashscreen.preventAutoHideAsync()

const Layout = () => {

    const [location, setLocation] = useState<Location.LocationObject | null>(null);

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
   

    useEffect(()=>{
        async function getCurrentLocation() {
      
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              console.log('not granted')
              return;
            }
      
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
          }
  
          
        getCurrentLocation()
    },[])



    const onLayoutRootView = useEffect(()=>{
        if (location !== null){
           // Splashscreen.hideAsync()
        }
       
        
    },[location])



    if (!loaded){

        console.log('not loaded')
        // Splashscreen.hideAsync()
        return null
    }  
    return <Stack onLayout =  { onLayoutRootView } />
}


export default Layout;