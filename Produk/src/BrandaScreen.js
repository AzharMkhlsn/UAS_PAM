import { View, Text, StyleSheet, Button , ImageBackground} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function BrandaScreen({navigation}) {
  return (
      <ImageBackground source={require('./bg1.jpg')}

      style={{flex :1}}>
      <View style={styles.container}>
      <View style={styles.menu}>
      <Text style={styles.menu2}>Berikut kegiatan yang kami tawarkan</Text>
      

    <View style={styles.back}>
      
     <View>
      <View    style={styles.profile}>
      <FontAwesome5  name='music' color={'black'}size={50}  />
      <Button title="music"  color ={'indigo'} size= {20}
      onPress={() => navigation.navigate("music")}
     />
      </View>
      <View    style={styles.cek}>
      <FontAwesome5  name='book' color={'black'}size={50}  />
      <Button title="education"  color ={'indigo'} size= {20}
      onPress={() => navigation.navigate("education")}
     />
      </View>

     

      </View>
      <View>
      
      <View    style={styles.profile}>
      <FontAwesome5  name='users' color={'black'}size={50}  />
      <Button title="social"  color ={'indigo'} size= {20}
      onPress={() => navigation.navigate("social")}
     />
      </View>
      <View    style={styles.profile}>
      <FontAwesome5  name='landmark' color={'black'}size={50}  />
      <Button title="recreation"  color ={'indigo'} size= {20}
      onPress={() => navigation.navigate("recreation")}
     />
      </View>
      </View>
    
      </View>
      <View    style={styles.profile}>
      <FontAwesome5  name='hand-holding-heart' color={'black'}size={50}  />
      <Button title="charity"  color ={'indigo'} size= {20}
      onPress={() => navigation.navigate("charity")}
     />
        </View>

      </View>

    </View>


     <View   style={styles.container}>
    
 
    
      </View>
      </ImageBackground>
  );
}
const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      marginTop:230,
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
        borderRadius : 10
      
      },
      menu2:{
        fontSize : 26,
        color: 'indigo',
        fontWeight : 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20,
      
      },
      back:{
       
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        
      
      },
      cek:{
        marginHorizontal:20,
        marginVertical:20,
        height:70,
        width:100,
        opacity:0.8,
        alignItems: 'center',
        justifyContent: 'space-between',
      
      },
      profile:{
   
        marginHorizontal:20,
        marginVertical:20,
        height:70,
        opacity:0.8,
        width:100,
        alignItems: 'center',
      
      },
     
      

});