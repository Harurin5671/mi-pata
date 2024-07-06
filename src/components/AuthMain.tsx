import React from 'react'
// import { Image, View } from 'react-native'

import Spacer from '@components/Spacer'
import CustomButton from '@components/CustomButton'
import LogoWithSpacer from '@components/LogoWithSpacer'
import useNavigationHandler from '@hooks/useNavigationHandler'

interface AuthMainProps {
  navigation: any
}

const AuthMain: React.FC<AuthMainProps> = ({ navigation }) => {
  const handleNavigation = useNavigationHandler()

  return (
    <>
      <LogoWithSpacer imageSource={require('@assets/images/logo_mi_pata_blue.png')} height={100}/>
      <Spacer height={100} />
      <CustomButton onPress={handleNavigation('SignUpScreen')} title="Crea una Cuenta" />
      <Spacer height={12} />
      <CustomButton onPress={handleNavigation('LoginScreen')} title="Iniciar sesión" />
      <Spacer height={26} />
    </>
  )
}

export default AuthMain
