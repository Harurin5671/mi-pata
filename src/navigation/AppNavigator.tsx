import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'
import { type RootStackParamList } from '@interfaces/navigation'

import HomeScreen from '@screens/HomeScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
