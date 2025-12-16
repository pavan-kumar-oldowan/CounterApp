import {View,Text,Button,StyleSheet} from "react-native";
import { useState } from "react";
import React from "react"
export default function App(){
    const [count,setCount]=useState(0);
     return(
      <View style={styles.container}>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Increase" onPress={()=>setCount(count+1)}/>
          <Button title="Decrease" onPress={()=>setCount(count-1)}/>
          <Button title="Reset" onPress={()=>setCount(0)}/>
        </View>
      </View>
     )
}

const styles=StyleSheet.create({
   container :{
     flex:1,
     justifyContent:"center",
     alignItems:"center"
   },
   count:{
        fontSize:48,
        marginBottom:24
   },
   buttonContainer:{
       flexDirection:"row",
       gap:12
   }

})