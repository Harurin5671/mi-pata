import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { type RootStackParamList } from '@interfaces/navigation'

import AuthScreen from '@screens/auth/AuthScreen'
import LoginScreen from '@screens/auth/LoginScreen'
import SignUpScreen from '@screens/auth/SignUpScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

const AuthNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator initialRouteName="AuthScreen">
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
