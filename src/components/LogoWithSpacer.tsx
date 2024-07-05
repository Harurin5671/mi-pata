import React from 'react'
import { Image, View } from 'react-native'

import Spacer from '@components/Spacer'

const LogoWithSpacer: React.FC = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Spacer height={100} />
      <Image source={require('@assets/images/logo_mi_pata_blue.png')} />
    </View>
  )
}

export default LogoWithSpacer
