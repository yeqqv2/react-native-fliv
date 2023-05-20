/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Login from './src/login/SignIn';
import Register from './src/login/SignUp';
import ProfileScreen from './src/screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Message } from './src/screens/Message';
import { MessageIn } from './src/components/MessageIn';


const Stack = createNativeStackNavigator();

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {loggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="DM" component={Message} />
            <Stack.Screen name="MessageIn" component={MessageIn} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={Login} />
            <Stack.Screen name="SignUp" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
