import { type NativeStackNavigationProp } from '@react-navigation/native-stack'

export interface RootStackParamList {
  [key: string]: object | undefined
  Home: undefined
  // Profile: { userId: string };
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
RootStackParamList,
'Home'
>

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp
}
