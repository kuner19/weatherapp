
import { rS, rV } from "@/src/style/responsive";
import { Stack } from "expo-router";
import { Text,SafeAreaView,View, Dimensions} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { bgSelect } from "@/src/style/bg_selector";
import SearchComponent from "@/src/components/SearchComponent";



const Home = () =>{

   const forecast =  bgSelect('sunny')

    return  (

        <SafeAreaView>
         <Stack.Screen options={{headerTitle : "" , headerShown:false}}/>
         <LinearGradient
        // Button Linear Gradient
        colors={[forecast?.bg1 || '',forecast?.bg2 || '']}>
         <View className="p-[20] flex items-center" style={{height: rV(400), width:rS(360)}}>

          <SearchComponent/>
   
         </View>
         </LinearGradient>
      </SafeAreaView>

    )

}

Home.navigationOptions= {
    headerShown:false
}

export default Home