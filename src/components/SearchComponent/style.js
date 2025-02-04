const { StyleSheet } = require("react-native");

const styles = (w,h,radius) => StyleSheet.create({
    container : {
            height:h,
            width:w,
            borderRadius: radius,
            justifyContent:'space-between',
            borderColor:'#FFFFFF',
            borderWidth:1,
            display:'flex',
            flexDirection:'row',
            paddingStart:15,
            paddingEnd:15
    },

    icon_bg: {
        backgroundColor:'rgba(255,255,255,.1)',
        display:'flex',
        justifyContent:'center',
        width:w,
        height:h,
        borderRadius:radius
    },

    loc_container: {
            padding : 5 ,
            display : 'flex',
            flexDirection:'row', 
    }

   
})


export default styles