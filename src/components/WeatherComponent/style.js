const { StyleSheet } = require("react-native");

import { rMS, rS, rV } from "@/src/style/responsive"

const styles = (w,h,font) => StyleSheet.create({


    container : {
        height:rV(h),
        width:rS(w),
        borderColor:'#FFFFFF',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        padding:12
    },
    
    pin_container : {
        display: 'flex',
        flexDirection:'row',
        alignItems:'center'

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
        fontSize:rMS(font,.8),
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
        width:rS(25),
        height:rS(25),
        transform:[{ translateX: rMS(-20,.6)},{translateY: rMS(10,.6)}]
    },
    temp_img_small: {
        width:rS(7),
        height:rS(7),
        transform:[{ translateX: rMS(-5,.6)},{translateY: rMS(3,.6)}]
    },
    humid_toast : {
        height:rV(h),
        width:rS(w),
        borderColor:'#FFFFFF',
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,.1)',
        padding:12,
        borderRadius: rV(30),
        justifyContent:'space-between'

    },
})


export default styles