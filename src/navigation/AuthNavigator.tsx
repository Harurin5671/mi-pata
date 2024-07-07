/* eslint-disable @typescript-eslint/no-namespace */
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { type StaticParamList } from '@react-navigation/native'

import AuthScreen from '@screens/auth/AuthScreen'
import LoginScreen from '@screens/auth/LoginScreen'
import SignUpScreen from '@screens/auth/SignUpScreen'
import EmailSentScreen from '@screens/auth/EmailSentScreen'
import CompleteProfileScreen from '@screens/auth/CompleteProfileScreen'
import { type AuthStackParamList } from '@interfaces/navigation'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StaticParamList<typeof AuthNavigator> {}
  }
}

const AuthNavigator = createNativeStackNavigator<AuthStackParamList>({
  initialRouteName: 'AuthScreen',
  screenOptions: {
    headerShown: false
  },
  screens: {
    AuthScreen,
    LoginScreen,
    SignUpScreen,
    EmailSentScreen,
    CompleteProfileScreen
  }
})

export default AuthNavigator
