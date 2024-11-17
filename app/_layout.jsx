import { Stack } from "expo-router";
import { useCallback } from "react";
import {useFonts} from 'expo-font';
import { Text } from "react-native";
import * as Splashscreen from 'expo-splash-screen';

Splashscreen.preventAutoHideAsync()

const Layout = () => {
    // const [fontsLoaded] = useFonts ({
    //     DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    //     DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    //     DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    // })

    const onLayoutRootView = useCallback(async ()=>{
        // if (fontsLoaded){
        //     await Splashscreen.hideAsync()
        // }
        Splashscreen.hideAsync()
    },[])
    Splashscreen.hideAsync()
    // if (!fontsLoaded){
    //     Splashscreen.hideAsync()
    //     return null
    // }  
    return <Stack onLayout =  { onLayoutRootView } />
}


export default Layout;