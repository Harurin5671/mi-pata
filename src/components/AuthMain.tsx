import React from 'react'
// import { Image, View } from 'react-native'

import Spacer from '@components/Spacer'
import CustomButton from '@components/CustomButton'
import LogoWithSpacer from '@components/LogoWithSpacer'

interface AuthMainProps {
  // onPress: (event: GestureResponderEvent) => void
  navigation: any
}

const AuthMain: React.FC<AuthMainProps> = ({ navigation }) => {
  const handleNavigation = (route: string) => () => {
    navigation.navigate(route)
  }

  return (
    <>
      <LogoWithSpacer />
      <Spacer height={100} />
      <CustomButton onPress={handleNavigation('SignUpScreen')} title="Crea una Cuenta" />
      <Spacer height={12} />
      <CustomButton onPress={handleNavigation('WelcomeScreen')} title="Iniciar sesión" />
      <Spacer height={26} />
    </>
  )
}

export default AuthMain
