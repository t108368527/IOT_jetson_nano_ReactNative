// import React, {Component} from 'react';
// import {RedisClient} from 'react-native-redispubsub';
// import { RNCamera, FaceDetector } from 'react-native-camera';
// import {StyleSheet, Text, View, Button, Alert} from 'react-native';
// import CameraPage from './RNcamera';
// export default class App extends Component<{}> {
//   SampleFunction1() {
//     RedisClient.redisConnect('140.109.20.33:8987', 'iotclassj6xul6');
//     RedisClient.publish('iotclass', 'test');
//   }

//   SampleFunction2(StringHolder) {
//     RedisClient.publish('iotclass', 'test');
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={{margin: 10}}>
//         <Button
//           title="註冊(新增人員)"
//           onPress={() => navigation.navigate('Camera')}
//         />
//         </View>

//         <View style={{margin: 10}}>
//           <Button
//             onPress={this.SampleFunction2.bind(
//               this,
//               'Function With Argument Text',
//             )}
//             title=" Click Here To Call Function - 2 "
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',

//     margin: 10,
//   },
// });
// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { ThemeColors, createNavigator } from '@react-navigation/core/src';
import CameraPage from './RNcamera';
import MessagePage from './Message';
// import NotifService from './MyComponent';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#545454" }}>
      <Text style={{color:"white",fontSize: 20,}}>首頁</Text>
      <View style={{margin:10}}>
        <Button
          title="註冊(新增人員)"
          onPress={() => navigation.navigate('Camera')}
        />
      </View>
      <Button
      style={{margin:10}}
        title="資訊"
        onPress={() => navigation.navigate('Message')}
      />
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraPage} />
        <Stack.Screen name="Message" component={MessagePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;