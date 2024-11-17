import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "space-between",
        // alignItems: "center",
        justifyContent:'center',
        flexDirection: "row",
        color: 'white'
        //padding: SIZES.medium,
        //borderRadius: SIZES.small,
        // backgroundColor: "#FFF",
        // ...SHADOWS.medium,
        // shadowColor: COLORS.white,
      },
    full: {
        height:  '100%',
        width: '100%',
        paddingTop:StatusBar.currentHeight + 20,
        padding:20
    },
    bgimg:{
        width: '100%',
        height: undefined,
        position:'absolute',
        height:'100%'
    },

    search_container : {
        backgroundColor:'rgba(255,255,255,.2)',
        padding:5,
        borderRadius:25,
        width:'100%',
        flex:1,
        flexDirection: 'row',
        justifyContent:'flex-end'
    },

    search_input: {
        paddingLeft:20,
        padding:10,
        width:'90%',
        maxHeight:40,

    },
    search_button:{
        width:40,
        borderRadius:25,
        backgroundColor:'rgba(255,255,255,.2)',
        justifyContent:'center',
        alignItems:'center'
    },

    location_container:{
        position:'absolute',
        width:'100%',
        backgroundColor:'white',
        marginTop: 60,
    },
});

 


export default styles