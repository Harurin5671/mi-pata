import React from 'react'
import { View } from 'react-native'

interface SpacerProps {
  height?: number
  width?: number
}

const Spacer: React.FC<SpacerProps> = ({ width = 0, height = 0 }) => {
  return <View style={{ width, height }} />
}

export default Spacer
