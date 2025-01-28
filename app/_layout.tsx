import { Stack } from "expo-router";
import { useCallback } from "react";
import {useFonts} from 'expo-font';
import { Text } from "react-native";
import * as Splashscreen from 'expo-splash-screen';
import "../global.css"

Splashscreen.preventAutoHideAsync()

const Layout = () => {
    const [fontsLoaded] = useFonts({
        // Inter: require('../assets/fonts/Inter.ttf'),
        // Robot : require('../assets/fonts/Roboto-Light.ttf')
    })

    const onLayoutRootView = useCallback(async ()=>{
        if (fontsLoaded){
            await Splashscreen.hideAsync()
        }
        Splashscreen.hideAsync()
    },[])
    Splashscreen.hideAsync()
    if (!fontsLoaded){
        Splashscreen.hideAsync()
        return null
    }  
    return <Stack onLayout =  { onLayoutRootView } />
}


export default Layout;