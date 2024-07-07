import React, { type ReactNode } from 'react'
import { View, StyleSheet, type ViewStyle } from 'react-native'

import SafeAreaWrapper from '@components/SafeAreaWrapper'

interface ScreenContainerProps {
  children: ReactNode
  wrapperStyle?: ViewStyle
  barStyle?: 'default' | 'light-content' | 'dark-content'
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, wrapperStyle, barStyle }) => {
  return (
    <SafeAreaWrapper style={wrapperStyle} barStyle={barStyle}>
      <View style={[styles.container]}>{children}</View>
    </SafeAreaWrapper>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center' }
})

export default ScreenContainer
