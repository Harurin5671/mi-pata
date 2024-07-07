import React, { type ReactNode } from 'react'
import { ScrollView, type ScrollViewProps, StyleSheet } from 'react-native'

interface CustomScrollViewProps extends ScrollViewProps {
  horizontal?: boolean
  children: ReactNode
}

const CustomScrollView: React.FC<CustomScrollViewProps> = ({ horizontal = false, children }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      horizontal={horizontal}
    >
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flexGrow: 1 }
})

export default CustomScrollView
