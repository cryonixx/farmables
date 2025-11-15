import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ParentLogIn from './ParentLogIn';
import WelcomeScreen from './WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
     return (
          <NavigationContainer>
               <Stack.Navigator
                    initialRouteName="WelcomeScreen"
                    screenOptions={{ headerShown: false }}
               >
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                    <Stack.Screen name="ParentLogIn" component={ParentLogIn} />
               </Stack.Navigator>
          </NavigationContainer>
     );
}
