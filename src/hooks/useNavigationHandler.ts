import { useCallback } from 'react'
import { useNavigation, type NavigationProp } from '@react-navigation/native'
import { type RootStackParamList } from '@interfaces/navigation'

type NavigationRoute = keyof RootStackParamList

const useNavigationHandler = (): (route: NavigationRoute) => () => void => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const handleNavigation = useCallback(
    (route: NavigationRoute) => () => {
      navigation.navigate(route as string)
    },
    [navigation]
  )

  return handleNavigation
}

export default useNavigationHandler
