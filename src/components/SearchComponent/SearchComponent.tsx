import { rMS, rS, rV } from "@/src/style/responsive"
import { FlatList, Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from '@/src/components/SearchComponent/style'
import image from '@/src/style/images'
import { useEffect, useState } from "react"
import fetchLocation from "../../service/get_location"

const SearchComponent = ({setCoordinates} : any) => {

    const [searchValue , setSearchValue] = useState('')
    const [showSearch, toggleSearch] = useState(false)
    const [searchHolder, setSearchHolder] = useState('Search your location...')
    const [location, setLocations] = useState<any>([])
    const [weather, setWeather] = useState<any>([])

    useEffect(()=>{
        if (searchValue === ''){
            toggleSearch(false)
        } else 
            toggleSearch(true)
        
    },[searchValue,searchHolder])


    useEffect(()=>{
        if (searchValue !== ''){
           
            const loc =  fetchLocation(searchValue).then((response)=>{
             

                if (response){
                    setLocations(response)
                }
            })
        }
       
    },[searchValue])
   


    return (
        <View className="flex items-center">
                <View className="items-center" style={styles(rMS(250, .5),rMS(40,.5),rV(30)).container}> 
                    <TextInput placeholder={searchHolder} value={searchValue} placeholderTextColor='rgba(255,255,255,.3)' style={{height:rMS(40), width:rMS(200,.5),fontSize:rMS(12),color:'white'}} 
                    onChangeText={setSearchValue}
                    />
                    <TouchableOpacity onPress={()=> {
                        toggleSearch(false)
                    }}
                    
                     >
                    <View className="items-center" style={styles(rMS(25),rMS(25),rMS(25)).icon_bg} >
                    <Image source={image.magnify} style={{width:rMS(15), height:rMS(15)}}/>
               </View>
                    </TouchableOpacity>
                 
               
        </View>


        {location.length > 0 && showSearch ? (
           
                    <View style={{width:rMS(325,.5), maxHeight:rMS(100), backgroundColor:'white', marginTop:3}}>
                        <FlatList data={location} renderItem={({item,index}) => (
                              
                            
                              <TouchableOpacity onPress={()=>{  
                                console.log(item)
                                setSearchValue(`${item.name} ${item.admin1 || ''}, ${item.country || ''}`)
                                setSearchHolder(`${item.name} ${item.admin1 || ''}, ${item.country || ''}`)
                                toggleSearch(false)
                                setCoordinates(item)
                                setLocations([])
                            }}

                            onBlur={()=>{
                                
                            }}

                            >
                            
                                <View style={[styles(('')).loc_container, {backgroundColor: (index + 1) % 2 === 0 ? 'rgba(155,155,155,.2)' : 'white'}]}>
                                <Image source={image.pin_black} style={{width:rMS(15), height:rMS(15)}}/>
                            
                                <Text style={{fontSize:rMS(12)}}>{item.name || ''} {item.admin1 || ''}, {item.country || ''}</Text>
                             

                                </View>
                            </TouchableOpacity>
                         
                          
                           
                           
                  )}/>
                    </View>
        ) : null } 



        </View>

    )
}

export default SearchComponent