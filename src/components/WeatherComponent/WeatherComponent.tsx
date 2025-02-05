import { Image, Text, View } from "react-native"
import image from '@/src/style/images'
import styles from "../WeatherComponent/style"
import { rMS, rS, rV } from "@/src/style/responsive"

const WeatherComponent = () => {

    return (
        <View className='flex flex-row' style={styles(280,350).container}>

            <View className="flex flex-row" style= {styles().pin_container}>
                <Text style={styles(0,0,20).text}>
                Caloocan City
                </Text>
                <Image source={image.pin} style={{width:rMS(15,.5),height:rMS(15,.5),margin:5}}/>
            </View>

            <View style={styles(250,0,0).forecast_container}>
                <View style={styles().column_container}>
                    <Image source={image.sunny} style={{width: rMS(100,.9),height:rMS(100,.9)}}/>
                    <Text  style={styles(0,0,16).text}>Sunny</Text>
                </View>
            <View>
                <View style={styles().row_container}>
                    <Text style={styles(0,0,60).text}>10&deg;</Text>
                    <Image source={image.temp_white} style={styles().temp_img}/>
                </View>
                <Text  style={styles(0,0,16).text}>7:00 PM</Text>
                <Text  style={styles(0,0,16).text}>01/07/25</Text>
                <Text  style={styles(0,0,16).text}>Thurs</Text>
            </View>
            </View>


            <View style={styles(290,70).humid_toast}>
            <View style={styles().column_container}>
                <View style={styles().row_container}>
                    <Text style={styles(0,0,16).text}>Humidity</Text>
                    <Image source={image.humid}  style={{width: rMS(12,.9),height:rMS(12,.9), marginLeft:5}} />
                </View>
                <View style={styles().row_container}>
                    <Text style={styles(0,0,16).text}>10&deg;</Text>
                    <Image source={image.temp_white} style={styles().temp_img_small}/>
                </View>
            </View>
            <View style={styles().column_container}>
                <View style={styles().row_container}>
                    <Text style={styles(0,0,16).text}>Wind</Text>
                    <Image source={image.wind}  style={{width: rMS(12,.9),height:rMS(12,.9), marginLeft:5}} />
                </View>
                <View style={styles().row_container}>
                    <Text style={styles(0,0,16).text}>20Kph</Text>
                </View>
            </View>
            </View> 
           
        </View>
    )

}

export default WeatherComponent