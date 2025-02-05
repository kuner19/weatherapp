import { Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import {useFonts} from 'expo-font';
import { Text } from "react-native";
import * as Splashscreen from 'expo-splash-screen';
import "../global.css"

Splashscreen.preventAutoHideAsync()

const Layout = () => {
    const [loaded,error] = useFonts({
        // Inter: require('../assets/fonts/Inter.ttf'),
        // Robot : require('../assets/fonts/Roboto-Light.ttf')
        'JosefinSlab': require('../assets/fonts/JosefinSlab-Regular.ttf')
    })

    // const onLayoutRootView = useEffect(async ()=>{
    //     if (loaded || error){


    //         console.log(loaded)
    //         console.log(error)
    //         await Splashscreen.hideAsync()
    //     }
    //     Splashscreen.hideAsync()
    // },[loaded , error])


    const onLayoutRootView = useEffect(()=>{
        if(loaded){
            console.log(loaded)
                    Splashscreen.hideAsync()
        }  
        Splashscreen.hideAsync()
        
    },[loaded,error])
    if (!loaded){

        console.log('not loaded')
        Splashscreen.hideAsync()
        return null
    }  
    return <Stack onLayout =  { onLayoutRootView } />
}


export default Layout;