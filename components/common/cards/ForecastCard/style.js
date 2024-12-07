import { StyleSheet } from "react-native";



const style = StyleSheet.create({
   content_center :{
     justifyContent:'center',
     alignItems:'center'
   },
   column_container : {
        flex:1,
        justifyContent:'space-around',
        alignItems : 'center',
        flexDirection: "column",
        color: 'white',
        padding: 20

   },
   row_container : {
     flex:1,
     justifyContent:'space-between',
     alignItems : 'center',
     flexDirection: "row",
     color: 'white',
     paddingTop: 20,
},
    toast:{
      flex:1,
      justifyContent:'space-between',
      alignItems : 'center',
      flexDirection: "row",
      color: 'white',
      padding:20,
      backgroundColor:'rgba(0,0,0,.40)',
      borderRadius:25,
    },
   icon: { 
     height:175,
     width:175
   }
 })


 

 export default style