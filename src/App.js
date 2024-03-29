import React, { useState, useEffect } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

function App () {

  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(100);
  const [helloFlag, setHelloFlag] = useState(true);
  // console.log('render');
  useEffect(()=>{console.log("Number  changed to: ", number)},[number]); //
  useEffect(()=>{console.log("Counter  changed to: ", counter)},[counter]); //
  useEffect(()=>{console.log("Mounting...")},[]);
  function updateNumber(){
      console.log("First State Value: "+number)
      setNumber(number+1)
      console.log("Second State Value: "+number)
  }

  function updateFlag(){
    setHelloFlag(!helloFlag);
  }

  return(
    <SafeAreaView>
      <Text>
        Hello Lifecycle
      </Text>
      <Text style={{textAlign:"center", fontWeight:"bold", fontSize:25}}>
        Number {number}
      </Text>
      
      <Button title="Number Up!" onPress={()=>setNumber(number+1)}/>
      <Button title="Number Down!" onPress={()=>setNumber(number-1)}/>
      <Button title="Number reload" onPress={()=>setNumber(number-number)}/>
      <Button title="TEST" onPress={updateNumber}/>
      <Text style={{textAlign:"center", fontWeight:"bold", fontSize:25}}>
        Counter {counter}
      </Text>
      <Button title="Counter Up!" onPress={()=>setCounter(counter+100)}/>
      <Button title="Counter Down!" onPress={()=>setCounter(counter-100)}/>
      <Button title="Counter reload" onPress={()=>setCounter(counter-counter)}/>
      {helloFlag && <Hello/>}
      <Button title="UPDATE FLAG" onPress={updateFlag}/>
    </SafeAreaView>
  )
}

export default App

function Hello(){

  useEffect(()=>{
    console.log("Hello World!")

    return()=>{
      console.log("I am crying. All Love in My Heart")
    }
  },[])
  return <View style={{backgroundColor:'black', padding:10,}}>
    <Text style={{color:"azure", fontWeight:"bold", fontSize:25, textAlign:'center'}}>I'm Hello Component</Text>
  </View>
}