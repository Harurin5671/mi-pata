import React from 'react'
import { Image, View, type ImageSourcePropType } from 'react-native'

import Spacer from '@components/Spacer'

interface LogoWithSpacerProps {
  imageSource: ImageSourcePropType
  height: number
}

const LogoWithSpacer: React.FC<LogoWithSpacerProps> = ({ imageSource, height }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Spacer height={height} />
      <Image source={imageSource} />
    </View>
  )
}

export default LogoWithSpacer
