import { Text, View, SafeAreaView , ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';
import { Stack,useRouter } from 'expo-router';
import styles from "../components/common/cards/styles.js"
import loc_style from "../components/common/cards/loc_styles.js"
import { LinearGradient } from 'expo-linear-gradient';
import { Image , StatusBar} from 'react-native';
import ForecastCard from '../components/common/cards/ForecastCard/ForecastCard.jsx'
import SearchCard from '../components/common/cards/SearchCard/SearchCard.jsx'
import FutureCard from '../components/common/cards/FutureCard/FutureCard.jsx'
import React from 'react'

const Home = ()=> {
   
const [showSearch,toggleSearch] = useState(true)
const [locations,setLocation] = useState([1,2,3])
const [background, setBackground] = useState('rainy')

const handleBackground = (x) => {
   const weather = ['rainy','clear','snowy']
   const bg  = [['#3F3B78', '#010022'],['#B2B2B2', '#8B6C06'],['#1D6FAA', '#09152E'],['#3F3B78', '#010022']]

   if (weather.indexOf(x) >= 0){
      return bg[weather.indexOf(x)]
   } return bg[0]
}

const handleLoc = (loc) => {
   alert(loc)
}



   return (

    <SafeAreaView style={styles.container}>
      
      <Stack.Screen options={{headerTitle : "" , headerShown:false}}/>
      <StatusBar backgroundColor="black"/>
                  {/* <Image resizeMode={'cover'} style={styles.bgimg} source={require('../assets/images/background.png')}/> */}
                  <LinearGradient colors={handleBackground(background)}>
      <ScrollView showsVerticalScrollIndicator = {false}>
          <View style = {[styles.container, styles.full]}>
            <View>
                  <SearchCard setBackground ={setBackground} />
                  <ForecastCard icon = {background}/>
                 
            </View>
         </View>
         <FutureCard/>
        </ScrollView>

            </LinearGradient>
  </SafeAreaView>

   )

}

export default Home