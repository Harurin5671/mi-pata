// import React from 'react'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { type RootStackParamList } from '@interfaces/navigation'

import AuthNavigator from './AuthNavigator'

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Auth',
  screens: {
    Auth: { screen: AuthNavigator, options: { headerShown: false } }
  }
})

const AppNavigator = createStaticNavigation(RootStack)

export default AppNavigator
