import {View,Text,Button,StyleSheet} from "react-native";
import { useEffect, useState } from "react";
import React from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";
import CounterButton from "@/components/counterButton"; 
export default function App(){
    const [count,setCount]=useState(0);

     const saveCount = async(value:number)=>{
      try{
          await AsyncStorage.setItem("CounterValue",value.toString())
      }catch(e){
           console.log("Failed to save the count to storage");
      }
     }
      useEffect(()=>{
        saveCount(count);
      },[count])

    const LoadCount = async()=>{
      try{
        const store=await AsyncStorage.getItem("CounterValue")
        if(store!==null){
            setCount(parseInt(store));
        }
      }catch(e){
          console.log("Failed to load the count from the Storage")
      }
    }
    useEffect(()=>{
      LoadCount();
    },[])
     return(
      <View style={styles.container}>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.buttonContainer}>
          <CounterButton title="Increase" onPress={()=>setCount(prev=>prev+1)}/>
          <CounterButton title="Decrease" onPress={()=>setCount(prev=>(prev>0? prev-1 :0))} disabled={count === 0} />
          <CounterButton title="Reset" onPress={()=>setCount(0)}/>
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