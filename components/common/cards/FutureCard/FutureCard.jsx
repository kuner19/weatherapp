import { Text, View, SafeAreaView , ScrollView, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { useState } from 'react';
import { Stack,useRouter } from 'expo-router';
import styles from '../styles.js';
import loc_style from '../loc_styles.js';
import { Image , StatusBar} from 'react-native';

import React from 'react'



const FutureCard = ({setBackground}) => {

    
const [showSearch,toggleSearch] = useState(true)
const [locations,setLocation] = useState([1,2,3])

const handleLoc = (loc) => {
   setBackground(loc)
 }

 const data = [
   {id: 1, name: 'Tom'},
   {id: 2, name: 'Jerry'},
   {id: 3, name: 'Jerry'},
   {id: 4, name: 'Jerry'},
   {id: 5, name: 'Jerry'},


]
 
    return (
      <View>
         <Text>7 day forecast</Text>
         <FlatList
           data={data}
           renderItem={({item}) => (
            <Text>{item.name}</Text>
           )}
           horizontal
           keyExtractor={item => item.id}
           style={{backgroundColor:'red'}}
           />
      </View>
      
    )
}

export default FutureCard