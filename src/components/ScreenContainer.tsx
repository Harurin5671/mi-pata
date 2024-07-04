import React, { type ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'

import SafeAreaWrapper from '@components/SafeAreaWrapper'

interface ScreenContainerProps {
  children: ReactNode
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>{children}</View>
    </SafeAreaWrapper>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 }
})

export default ScreenContainer
