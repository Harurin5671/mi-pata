import React, { type ReactNode } from 'react'
import { ImageBackground, View, StatusBar, StyleSheet, type ViewStyle, type ImageSourcePropType } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface SafeAreaWrapperProps {
  children: ReactNode
  style?: ViewStyle
  imageBackground?: ImageSourcePropType
  barStyle?: 'default' | 'light-content' | 'dark-content'
}

const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({ children, style, imageBackground, barStyle = 'default' }) => {
  const insets = useSafeAreaInsets()

  if (imageBackground != null) {
    return (
      <ImageBackground source={imageBackground} style={styles.container}>
        <StatusBar barStyle={barStyle} backgroundColor="transparent" translucent={true} />
        {children}
      </ImageBackground>
    )
  }

  return (
    <View
      style={[styles.container, style, {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }]}
    >
      <StatusBar barStyle={barStyle} backgroundColor="transparent" translucent={true} />
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
