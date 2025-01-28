import { rS } from "@/src/style/responsive"
import { Text, TextInput, View } from "react-native"


const SearchComponent = () => {


    return (
    
        <View className="items-center" style={{width:rS(300)}}>  
               <TextInput value="" placeholder="Search Location"/>
        </View>
     
    
    )
}

export default SearchComponent