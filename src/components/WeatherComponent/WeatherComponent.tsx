import { Image, Text, View } from "react-native"
import image from '@/src/style/images'
import styles from "../WeatherComponent/style"
import { rMS, rS, rV } from "@/src/style/responsive"
import moment from 'moment'
import getWeatherDescription from "@/src/style/weatherTable"
import { imgSelect } from "@/src/vars/variable"
import LottieView from "lottie-react-native"
import { heightPercentageToDP as hp  } from "react-native-responsive-screen"
import { Skeleton } from "moti/skeleton"


const WeatherComponent = ({coordinates,currentForecast}:any) => {

     const weather = getWeatherDescription(currentForecast.weather_code,currentForecast.is_day)
    const weatherImg = imgSelect(weather,currentForecast.is_day)
 
    return (
        <View className='flex flex-row' style={styles(rMS(500,.7),rMS(280,.2)).container}>

            <View className="flex flex-row" style= {styles().pin_container}>
                <Text style={styles(0,0,3).text}>
                {coordinates.name}
                </Text>

                <Image source={image.pin_white} style={{width:rMS(12,.5),height:rMS(12,.5),margin:5}}/>
            </View>
            
            <View style={styles(200,0,0).forecast_container}>
                <View className='bg-amber-600' style={styles().column_container}>
                <LottieView source={weatherImg?.src} 
                    style={{width: hp(10), height: hp(10)}}
                    autoPlay
                    loop/>
                    {/* <Image source={weatherImg?.src} style={{width: rMS(100,.9),height:rMS(100,.9)}}/> */}
                    <Text  style={styles(0,0,2).text}>{weather}</Text>
                    
                </View>
            <View>
                <View style={styles().row_container}>
                    <Text style={styles(0,0,5).text}>{currentForecast.temperature_2m.toFixed(1) }&deg;</Text>
                    <Image source={image.temp_white} style={styles().temp_img}/>
                </View>
                <Text  style={styles(0,0,2).text}>{moment(currentForecast.time).format('LT')}</Text>
                <Text  style={styles(0,0,2).text}>{moment(currentForecast.time).format('l')}</Text>
                <Text  style={styles(0,0,2).text}>{moment(currentForecast.time).format('dddd')}</Text>
            </View>
            </View>


            <View style={styles(290,70).humid_toast}>
            <View style={styles().column_container}>
                <View style={styles().row_container}>
                    <Text style={styles(0,0,2).text}>Humidity</Text>
                    <Image source={image.humid}  style={{width: rMS(12,.9),height:rMS(12,.9), marginLeft:5}} />
                </View>
                <View style={styles().row_container}>
                    <Text style={styles(0,0,2).text}>{currentForecast.relative_humidity_2m}%</Text>
                </View>
            </View>
            <View style={styles().column_container}>
                <View style={styles().row_container}>
                    <Text style={styles(0,0,2).text}>Wind</Text>
                    <Image source={image.wind}  style={{width: rMS(12,.9),height:rMS(12,.9), marginLeft:5}} />
                </View>
                <View style={styles().row_container}>
                    <Text style={styles(0,0,2).text}>{currentForecast.wind_speed_10m} Km/h</Text>
                </View>
            </View>
            </View> 
           
        </View>
    )

}

export default WeatherComponent