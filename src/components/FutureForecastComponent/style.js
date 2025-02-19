import { rS, rV } from "@/src/style/responsive";
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from "react-native-responsive-screen";

import { Dimensions } from "react-native";

const {width,height} = Dimensions.get('window')


const { StyleSheet } = require("react-native");

 const styles = (font) => StyleSheet.create({

        container : {
        height:height > 990 && height < 1240 ? hp(25) : hp(23),
        width:rS(290),
        borderColor:'#FFFFFF',
        display:'flex',
        backgroundColor:'rgba(0,0,0,.1)',
        margin: 5,
        borderTopLeftRadius:rV(15),
        borderBottomRightRadius:rV(15),
        // borderRadius: rV(15),
        padding:10,
    },
    rain_container :{
        height:height > 990 && height < 1240 ? hp(15) : hp(14),
        width:height > 990 && height < 1240 ? wp(25) : wp(18),
        backgroundColor:'rgba(0,0,0,.2)',
        marginHorizontal:5,
        borderRadius:hp(3),
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

    },
    rain_lottie:{
        width: hp(11), 
        height: hp(11),
        position:'absolute',
        transform: [{translateY:hp(-2.75)},{translateX:hp(-2)}]
        
    },
    rain:{
        width: hp(5), 
        height: hp(5),
        position:'absolute',
        transform: [{translateY:hp(-2.75)},{translateX:hp(-2)}]
        
    },
    text:{
        fontFamily:'JosefinSlab',
        fontSize:hp(font),
        color:'white'
    },
    row_container : {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:height > 990 && height < 1240 ? hp(20) : hp(19),
        justifyContent:'center',

    },
})


export default styles