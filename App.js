import React from "react"
import { View, Text } from 'react-native'

import AccountScreen from "./src/screens/AccountScreen"
import SigninScreen from "./src/screens/SigninScreen"
import SignupScreen from "./src/screens/SignupScreen"
import TrackCreateScreen from "./src/screens/TrackCreateScreen"
import TrackDetailScreen from "./src/screens/TrackDetailScreen"
import TrackListScreen from "./src/screens/TrackListScreen"
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen"

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import { AuthProvider } from "./src/context/AuthContext"
import { LocationProvider } from "./src/context/LocationContext"
import { TrackProvider } from "./src/context/TrackProvider"

import { navigationRef } from './src/RootNavigation';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function TrackFlow() {
  return (<Stack.Navigator initialRouteName="TrackListScreen" >
    <Tab.Screen name="TrackListScreen" component={TrackListScreen} options={{ headerShown: false }} />
    <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
  </Stack.Navigator>
  )
}

function MainFlow() {
  return (
    <Tab.Navigator initialRouteName="TrackFlow">
      <Tab.Screen name="TrackFlow" component={TrackFlow} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}

// tab stack, ie tracklist, detail etc
function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="ResolveAuthScreen" >

        <Stack.Screen name="ResolveAuthScreen" component={ResolveAuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Signin" component={SigninScreen} options={{
          headerShown: false
        }} />

        <Stack.Screen name="MainFlow" component={MainFlow} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <LocationProvider>
    <AuthProvider>
      <TrackProvider>
        <App />
      </TrackProvider>
    </AuthProvider>
  </LocationProvider>

}