
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { rS,rMS} from "@/src/style/responsive";
const { StyleSheet } = require("react-native");


const styles = (index,font) => StyleSheet.create({

    row_container:{
        display:'flex',
        flexDirection:'row',
        paddingVertical:5,
        paddingHorizontal:5,
        backgroundColor: index === 0 ? 'rgba(245, 245, 245, 0.8)' :'white',
        alignItems:'center'
    },
    text:{
        fontFamily:'JosefinSlab',
        fontSize:hp(2),
        color:'black'
    },
    forecast_container: {
        display:'flex',
        flexDirection:'row',
        width:'50%',
        padding:5,
    },
    temp_img: {
            width:hp(.80),
            height:hp(.80),
            transform:[{ translateX: rMS(-5,.6)},{translateY: rMS(4,.6)}]
        },
})

export default styles