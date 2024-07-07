// import { type NativeStackNavigationProp } from '@react-navigation/native-stack'

// export interface RootStackParamList {
//   [key: string]: object | undefined
//   Home: undefined
//   // Profile: { userId: string };
// }

// export type HomeScreenNavigationProp = NativeStackNavigationProp<
// RootStackParamList,
// 'Home'
// >

// export interface HomeScreenProps {
//   navigation: HomeScreenNavigationProp
// }

// interfaces/navigation.ts
export interface AuthStackParamList {
  [key: string]: object | undefined
  AuthScreen: undefined
  LoginScreen: undefined
  SignUpScreen: undefined
  EmailSentScreen: undefined
}

// export interface MainTabParamList {
//   Home: undefined
//   Profile: undefined
//   Settings: undefined
// }
