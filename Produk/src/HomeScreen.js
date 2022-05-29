import { View, Text, StyleSheet, Button , ImageBackground} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function HomeScreen({navigation}) {
  return (
      <ImageBackground source={require('./bg10.jpg')}

      style={{flex :1}}>
      <View style={styles.container}>
      <View style={styles.menu}>
      <Text style={styles.menu2}>ANDA BOSAN</Text>
      <Text style={styles.menu2}>Bingung Cari Aktivitas?</Text>
      

    <View style={styles.back}>
      
      <View>
     

      
      </View>


      <View>
    
      <Text style={{color:'orange'}}>Tenang! Kami Punya Solusinya</Text>
      </View>
      
      </View>
      </View>
      <View style={styles.cek}>
      <FontAwesome5  name='question' color={'white'} size={150}  />
      </View>
      
    </View>


     <View   style={styles.container}>
    
 
     
      <View    style={styles.button}>
      <Button title="START"  color ={'indigo'} size= {20}
      onPress={() => navigation.navigate("branda")}
     />
      </View>
      </View>
      </ImageBackground>
  );
}
const styles = StyleSheet.create({
 
    container: {
      marginTop:50,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    back:{
        flex: 1,
    },
    menu:{
        height:300,
        width:270,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 20
      
      },
      menu2:{
        fontSize : 26,
        color: 'white',
       
        fontWeight : 'bold',
        alignItems: 'center',
        justifyContent: 'center',
      
      },
      back:{
       
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
      
      },
      button:{
        
        width:200,
        marginTop:3,
        backgroundColor:'red',
        borderColor:'black',
        borderWidth:2,
        borderRadius: 5,

      },
      cek:{
        opacity:0.6
      }

      

});