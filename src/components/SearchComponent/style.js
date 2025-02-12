import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { rMS, rS, rV } from "@/src/style/responsive"

const { StyleSheet, StatusBar } = require("react-native");

const styles = (w,h,radius) => StyleSheet.create({
    container : {
            height:rV(35),
            width:rS(250),
            borderRadius: hp(3),
            justifyContent:'space-between',
            borderColor:'#FFFFFF',
            borderWidth:1,
            display:'flex',
            flexDirection:'row',
            paddingStart:rS(7),
            paddingEnd:rS(7),

    },

    icon_bg: {
        backgroundColor:'rgba(0,0,0,.5)',
        display:'flex',
        justifyContent:'center',
        width:hp(4),
        height:hp(4),
        borderRadius:hp(3)
    },

    loc_container: {
            padding : 20 ,
            display : 'flex',
            flexDirection:'row', 
    },

    loadingContainer:{
        flex:1,
        backgroundColor:"#FFFFFF",
        paddingTop:StatusBar.currentHeight,
        justifyContent: "center",
        alignItems:'center'
        
    }
})


export default styles