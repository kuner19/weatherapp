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
        padding:15,
        borderRadius: rV(30),
        justifyContent:'space-between'

    },
})


export default styles