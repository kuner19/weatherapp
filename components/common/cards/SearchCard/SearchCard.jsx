import { Text, View, SafeAreaView , ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';
import { Stack,useRouter } from 'expo-router';
import styles from '../styles.js';
import loc_style from '../loc_styles.js';
import { Image , StatusBar} from 'react-native';
import React from 'react'
import {Fonts} from "../../../../constants/Sizes"
import {Colors} from "../../../../constants/Colors"


const SearchCard = ({setBackground}) => {

    
const [showSearch,toggleSearch] = useState(true)
const [locations,setLocation] = useState([1,2,3])

const handleLoc = (loc) => {
   setBackground(loc)
 }


 
    return (

                
        <View>
        <View style={styles.search_container}>
             <TextInput multiline={false} placeholder='Search city' placeholderTextColor={'gray'} style={[styles.search_input, Fonts.small,Colors.light] }/>
              <TouchableOpacity style={styles.search_button} onPress={
                 ()=> {toggleSearch(!showSearch)}
              }>
                 <Image source={require('../../../../assets/images/icons/magnify.png')}/>
              </TouchableOpacity>
        </View>

        {locations.length > 0 && showSearch ? (
           <View style={[styles.location_container,Fonts.medium,Colors.dark]}>
                 {locations.map((loc,index)=>{
                    let showBorder = index + 1 != locations.length
                    let weather = ['rainy','clear','snowy']
                    return (
                       <TouchableOpacity key={index} onPress={()=> handleLoc(weather[index])}>
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
    )
}

export default SearchCard