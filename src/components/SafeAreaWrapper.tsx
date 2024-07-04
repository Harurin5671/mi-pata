import React, { type ReactNode } from 'react'
import { View, StyleSheet, type ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface SafeAreaWrapperProps {
  children: ReactNode
  style?: ViewStyle
}

const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({ children, style }) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[styles.container, style, {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }]}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SafeAreaWrapper
