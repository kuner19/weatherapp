import { FlatList, Image, Text, View } from "react-native"
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from "react-native-responsive-screen"
import style from "@/src/components/DayForecast/style";
import image from '@/src/style/images'
import moment from "moment";
import getWeatherDescription from "@/src/style/weatherTable";
import { imgSelect } from "@/src/vars/variable";
import LottieView from "lottie-react-native";
import images from "@/src/style/images";
import { Skeleton } from "moti/skeleton";


const DayForecast = ({daysForecast}:any) => {

    type data = {
        time : string,
        weather_code : number,
        temperature:number,
        rain_percentage:number
       }
       const weatherImg = imgSelect('clear',1)
    const days_forecast:data[]= daysForecast
    return(
        
        <FlatList showsHorizontalScrollIndicator={false} data={Object.values(days_forecast)} renderItem={({item,index})=>(
            <View>
            
                <View style={style(index).row_container}>

                <View style={{width:'50%'}}>
                <Text style = {style(2).text}> {index === 0 ? 'Today' : moment(item.time).format('ddd')} </Text>
                </View>
               
                <View style={style().forecast_container}>
                    
                    <View style = {style(index).row_container}>
                        <LottieView source={imgSelect(getWeatherDescription(item.weather_code,1),1)?.src} 
                                            style={{width: hp(5), height: hp(5)}}
                                            autoPlay
                                            loop/>

                        <Text>|</Text>
                    </View>

                     <View style = {style(index).row_container}>
                        <Text style = {style(2).text}>{item.temperature.toFixed(1) }&deg;</Text>
                        <Image source={image.temp_black} style={style().temp_img}/>
                        <Text>|</Text>
                    </View>
                        
                     <View style = {style(index).row_container}>
                        <Image source={images.rain_percent} style={{height:hp(4),width:hp(4)}}/>
                        <Text style = {style(2).text}>{item.rain_percentage.toFixed(1)}%</Text>
                        
                    </View>

                </View>

                </View>
                
            </View>
        )}/>
      
    )
    
}

export default DayForecast