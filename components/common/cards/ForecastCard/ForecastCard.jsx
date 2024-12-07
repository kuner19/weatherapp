import { View, Text } from "react-native";
import React, { useState } from "react";
import {Fonts} from "../../../../constants/Sizes"
import {Colors} from "../../../../constants/Colors"
import { Image } from "react-native";
import style from '../ForecastCard/style.js'

const ForecastCard = (icon) => {
    
 let images = [
    {
        weather:'rainy',
        images : require('../../../../assets/images/weathers/rainy.png')
    },
    {
        weather:'clear',
        images : require('../../../../assets/images/weathers/clear.png')
    },
    {
        weather:'snowy',
        images : require('../../../../assets/images/weathers/snow.png')
    },
 ]



       const setWeatherimage =  () => {
            const xWeather = icon.icon
            const currentWeather =  images.find(x => x.weather === xWeather )
        if (currentWeather){
            return currentWeather.images
        }

        }
        return (
            <View>
                <View style = {style.column_container}>
                    <Image source={setWeatherimage()} style={style.icon}/>
                    <Text style={Fonts.medium}>{icon.icon} </Text>
                </View>
                <View style={{alignItems:"center",marginBottom:20}}>
                    <View style={[style.row_container, {width:300}]}>
                        <Text style={Fonts.large}>16&deg;</Text>
                        <View>
                            <Text style={Fonts.medium}>07:00 PM</Text>
                            <Text style={Fonts.medium}>Nov 27, 2024</Text>
                            <Text style={Fonts.medium}>Thurs</Text>
                        </View>
                    </View>
                </View>
                <View style={{alignItems:"center",}}>
                <View style={{width:400}}>
                    <View style={style.toast}>
                        <View>
                            <View style={style.row_container}>
                                <Text style={Fonts.medium}>Humidity</Text> 
                                <Image source={require('../../../../assets/images/weathers/humidity.png')} style={{width:25,height:25,marginLeft:5}} />
                            </View>
                           
                           <Text style={Fonts.medium}>16&deg;</Text>
                        </View>
                        <View>
                            <View style={style.row_container}>
                                <Text style={Fonts.medium}>Wind</Text>
                                <Image source={require('../../../../assets/images/weathers/wind.png')} style={{width:30,height:30,marginLeft:5}} /> 
                            </View>
                           
                           <Text style={Fonts.medium}>20kph</Text>
                        </View>
                    </View>
                </View>
                </View>

            </View>
        )
}


export default ForecastCard