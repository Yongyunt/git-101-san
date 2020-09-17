import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View,Image, TextInput, Button } from 'react-native';
import MyButton from './components/MyButton.js'


export default function App() {
  const [input,setInput] = useState('')
  const [color,setColor] = useState ('red')
  return (
    <View style={styles.container}>
      <Image
      source = {{ uri:'https://scontent.xx.fbcdn.net/v/t1.15752-0/p280x280/81513112_1437492026409792_1602860998635552768_n.jpg?_nc_cat=107&_nc_sid=b96e70&_nc_eui2=AeG-RU-2USP1uUwD6cuYK1WpPu_dc6Pk-hE-791zo-T6ETBz110cB2zo8NXl3-6G-DjG2I8ixlQNCDDGmwbgYpFl&_nc_ohc=eDjH_rCYGOQAX9ZYbG9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=7325add3d349e1ae69825a09bbc48ed8&oe=5F87FB0E'}}
      style={styles.logo}
      />
      <Text>Hello สวัสดีครับ</Text>
      <TextInput
         value = {input}
         onChangeText={(text) => {setInput(text)}}
        placeholder="input here"
         style={styles.input}> 
      
      </TextInput>
      <Text style={{fontSize :18 ,marginTop:20,color:color}}
      >{input}</Text>
      <View style={styles.buttonLayout}>
        {/* <Button title="Red" color="red" onPress={() =>{setColor('red')}}/>
        <Button title="Blue" color="blue" onPress={() =>{setColor('blue')}}/>
        <Button title="Green" color="green" onPress={() =>{setColor('green')}}/> */}
        <MyButton title="Red" color="red" onChangeColor={(color) =>{setColor(color)}} />
        <MyButton title="Blue" color="blue" onChangeColor={(color) =>{setColor(color)}} />
        <MyButton title="Green" color="green" onChangeColor={(color) =>{setColor(color)}} />

      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width : 150,
    height : 150,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    height:40,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    width : '70%',
    marginTop : 20
  },
  buttonLayout:{
    flexDirection: 'row',
    marginTop:20
  }


});
