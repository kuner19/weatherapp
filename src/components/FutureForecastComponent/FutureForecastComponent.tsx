import { View,Text, FlatList, ScrollView } from "react-native"
import styles from "@/src/components/FutureForecastComponent/style";
import { heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Dimensions } from "react-native";
import { rS, rV } from "@/src/style/responsive";
import LottieView from "lottie-react-native";
import images from "@/src/style/images";
import style from "@/src/components/FutureForecastComponent/style";

const FutureForecastComponent = ()=> {

    const data = [
        { percentage: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
        { time: ["1:00", "2:00", "3:00", "24:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00"] }
      ];
      

      const percentages = data[0]?.percentage ?? [];
      const times = data[1]?.time ?? [];

      const flatData =percentages.map((value, index) => ({
        percentage: value,
        time: times[index]
      }));


    return(
            <View style={styles().container}>
                <Text style={styles(2).text}>Chances of rain</Text>
                {/* Black line */}
                <View style={{
                    height: 1,
                    backgroundColor: 'rgba(0, 0, 0 ,0.1)',
                    alignSelf: 'stretch',
                    marginTop:5
                }} />

                <View style={styles().row_container}>
                    <FlatList  horizontal = {true} showsHorizontalScrollIndicator={false} data={Object.values(flatData)} renderItem={({item,index})=>(
                        <>
                        <View style={styles().rain_container}>
                        <Text style={styles(2).text}>{item.percentage}%</Text>
                        <View style={{width:hp(7),height:hp(7)}}>
                        <LottieView source={images.droplet} 
                                style={style().rain_lottie}
                                autoPlay
                                loop/>
                        </View>
                        
                        <Text style={styles(2).text}>{item.time}</Text>
                        </View>
                        
                        </>

                    )}>

                    </FlatList>
                    
                </View>
            </View>


       

    )
       
}

export default FutureForecastComponent