import React from 'react'
// import { useNavigation } from '@react-navigation/native'

import ScreenContainer from '@components/ScreenContainer'
import AutSocial from '@components/AuthSocial'
import AuthMain from '@components/AuthMain'

const AuthScreen: React.FC = () => {
  return (
    <ScreenContainer wrapperStyle={{ backgroundColor: '#fff' }} barStyle='dark-content' >
        <AuthMain />
        <AutSocial />
    </ScreenContainer>
  )
}

export default AuthScreen
