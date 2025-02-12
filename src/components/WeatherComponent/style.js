const { StyleSheet, Dimensions } = require("react-native");

import { rMS, rS, rV } from "@/src/style/responsive"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width,height} = Dimensions.get('window')
const styles = (w,h,font) => StyleSheet.create({

    
    container : {
        height:height > 990 && height < 1240 ? hp(33) : hp(34),
        width:wp(100),
        borderColor:'#FFFFFF',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        padding:12,
        // backgroundColor:'rgba(0,0,0,.5)'
    },
    
    pin_container : {
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:5

    },

    forecast_container: {
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:rS(w),
        paddingTop:rV(12),
        paddingBottom:rV(12)
    },
    
    text:{
        fontFamily:'JosefinSlab',
        fontSize:hp(font),
        color:'white'
    },
    row_container : {
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },

    column_container : {
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    temp_img: {
        width:rS(16),
        height:rS(16),
        transform:[{ translateX: rMS(-10,.6)},{translateY: rMS(7,.6)}]
    },
    temp_img_small: {
        width:rS(6),
        height:rS(6),
        transform:[{ translateX: rMS(-4,.6)},{translateY: rMS(2.5,.6)}]
    },
    humid_toast : {
        height:rV(h),
        width:rS(w),
        borderColor:'#FFFFFF',
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,.1)',
        padding:hp(3),
        borderRadius: rV(30),
        justifyContent:'space-between'

    },
})


export default styles