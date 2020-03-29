import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native';

export default class App extends Component<{}> {


 render() {
   return (
     <View style={styles.MainContainer}>
      <View style={{flex: 0.5,
                    flexDirection: ' row', 
}}>

        <TouchableOpacity activeOpacity={0.5}
        onPress={() => Alert.alert('1st button pressed')}
        >
         <Image 
          source={require('./wood.png')} 
          style={{ height: 68, width: 65, marginRight:100 }} 
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}
        onPress={() => Alert.alert('1st button pressed')}
        >
         <Image 
          source={require('./man.png')} 
          style={{ height: 68, width: 65, margin: 0,  }} 
          />
        </TouchableOpacity>        
      </View>

      <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}
      onPress={() => Alert.alert('1st button pressed')}
      >
         <Image 
          source={require('./ask.png')} 
          style={{ height: 68, width: 65, margin: 1,  }} 
          />
       </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}
      onPress={() => Alert.alert('2nd button pressed')}
      >
         <Image 
          source={require('./forest.png')} 
          style={styles.ImageIconStyle} 
          />

         <View style={styles.SeparatorLine} />

         <Text style={styles.TextStyle}> Second button</Text>

       </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}
      onPress={() => Alert.alert('4th button pressed')}
      >

         <Image 
          source={require('./plant 1.png')} 
          style={styles.ImageIconStyle} 
          />
  
         <View style={styles.SeparatorLine} />

         <Text style={styles.TextStyle}> Fourth button </Text>

       </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}
      onPress={() => Alert.alert('4th button pressed')}
      >

         <Image 
          source={require('./tree.png')} 
          style={styles.ImageIconStyle} 
          />
  
         <View style={styles.SeparatorLine} />

         <Text style={styles.TextStyle}> Fourth button </Text>

       </TouchableOpacity>


      <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}
      onPress={() => Alert.alert('4th button pressed')}
      >

         <Image 
          source={require('./money.png')} 
          style={styles.ImageIconStyle} 
          />
  
         <View style={styles.SeparatorLine} />

         <Text style={styles.TextStyle}> Fourth button </Text>

       </TouchableOpacity>

     </View>
   );
 }
}


const styles = StyleSheet.create({

 MainContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   margin: 0,
   backgroundColor: 'black',


 },
 
 GooglePlusStyle: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#f19499',
   borderWidth: .5,
   borderColor: '#fff',
   height: 35,
   borderRadius: 5 ,
   margin: 5,

},

buttonStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#d97102',
  borderWidth: .5,
  borderColor: '#fff',
  height: 70,
  borderRadius: 5 ,
  margin: 5,
  width: 280, 
  justifyContent: 'center'
 
},

ImageIconStyle: {
   padding: 10,
   margin: 5,
   height: 68,
   width: 65,
   resizeMode : 'stretch',
 
},

TextStyle :{

  color: "#fff",
  //marginBottom : 4,
  //marginRight :20,
  //marginLeft :20,
  textAlign: 'center',
   padding: 55
 
},

SeparatorLine :{
  backgroundColor : '#fff',
  width: 1,
  height: 70,
}

 
});