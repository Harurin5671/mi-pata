import React from 'react'

import { type HomeScreenProps } from '@interfaces/navigation'
import ScreenContainer from '@components/ScreenContainer'
import AutSocial from '@components/AuthSocial'
import AuthMain from '@components/AuthMain'

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScreenContainer>
        <AuthMain navigation={navigation} />
        <AutSocial />
    </ScreenContainer>
  )
}

export default HomeScreen
