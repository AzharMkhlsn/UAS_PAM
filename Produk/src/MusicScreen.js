import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View,  ImageBackground,Button } from 'react-native';

export default class MusicScreen extends React.Component {
  state={
  data:{'active' : 'Loading...'}
  
  }

  getJsonData = () =>{
    fetch('https://www.boredapi.com/api/activity/?type=music',
    {method:'GET'}).then((response) => response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      this.setState({
        data: responseJson

      })
    })
    .catch((error) => {
      console.error(error)
    });
  }
  componentDidMount =()=>{
    this.getJsonData()


  }
  render(){
   return(
    <ImageBackground source={require('./bg3.jpg')} style={{flex :1}}>
     <View style={styles.container}>

       <View style={styles.item}>
         <Text style={{margin:10, fontSize:16}}> Detail Activity</Text>
         <Text style={{margin:10, fontSize:22, color:'lightblue', alignItems:'center', justifyContent:'center', fontWeight: 'bold'}} selectable={true}>  { this.state.data['activity']}</Text>
         <Text style={{color:'red'}}>====================================</Text>
         <Text style={{margin:10, fontSize:22,  fontWeight: 'bold'}} >  {'Genre : ' + this.state.data['type']}</Text>
         <Text style={{margin:10, fontSize:22,  fontWeight: 'bold'}} >  {'Participants : ' + this.state.data['participants']}</Text>
         <Text style={{margin:10, fontSize:22,  color:'green',  fontWeight: 'bold'}} >  {'Price : $' +  this.state.data['price']}</Text>
         <Button title="Daftar"  color ={'indigo'} size= {20}
         onPress={() => alert('Pendaftaran sedang diproses, mohon menunggu')}/>
         <StatusBar style='auto'/>
       </View>

     </View>
     </ImageBackground>
   )
  }
}




const styles = StyleSheet.create({
  container: {
    margin:30,
    marginTop:30,
    flex: 1,
    borderColor:'black',
    alignItems: 'flex-start',
    justifyContent: 'center',
    
  },
  item: {
    flex:1,
    backgroundColor: 'rgba(254, 254, 254, 0.20)',
    borderRadius:7,
    color:'black',
    alignSelf:'stretch',
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:1,
   


  }
});
