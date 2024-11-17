import { Text, View, SafeAreaView , ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';
import { Stack,useRouter } from 'expo-router';
import styles from "../components/common/cards/styles.js"
import loc_style from "../components/common/cards/loc_styles.js"
import { LinearGradient } from 'expo-linear-gradient';
import { Image , StatusBar} from 'react-native';
import React from 'react'


const Home = ()=> {
   
const [showSearch,toggleSearch] = useState(true)
const [locations,setLocation] = useState([1,2,3])


const handleLoc = (loc) => {
   alert(loc)
}
   return (

    <SafeAreaView style={styles.container}>
      
      <Stack.Screen options={{headerTitle : "" , headerShown:false}}/>
      <StatusBar backgroundColor="black"/>
                  <Image resizeMode={'cover'} style={styles.bgimg} source={require('../assets/images/background.png')}/>
        <ScrollView showsVerticalScrollIndicator = {false}>
          <View style = {[styles.container, styles.full]}>
        
            <View>
               <View style={styles.search_container}>
                    <TextInput multiline={false} placeholder='Search city' placeholderTextColor={'gray'} style={styles.search_input }/>
                     <TouchableOpacity style={styles.search_button} onPress={
                        ()=> {toggleSearch(!showSearch)}
                     }>
                        <Image source={require('../assets/images/icons/magnify.png')}/>
                     </TouchableOpacity>
               </View>

               {locations.length > 0 && showSearch ? (
                  <View style={styles.location_container}>
                        {locations.map((loc,index)=>{
                           let showBorder = index + 1 != locations.length
                           
                           return (
                              <TouchableOpacity key={index} onPress={()=> handleLoc(loc)}>
                                 <Text
                                 style = {loc_style.locations(showBorder?.1 :0)}
                                 >{loc}</Text>

                              </TouchableOpacity>
                           )
                        })
                        }
                  </View>

               ):null}
            </View>
            
            <View>

            </View>
         </View>
        </ScrollView>

  </SafeAreaView>

   )

}

export default Home