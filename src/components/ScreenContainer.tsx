import React, { type ReactNode } from 'react'
import {
  View,
  StyleSheet,
  type ImageSourcePropType,
  type ViewStyle
} from 'react-native'

import SafeAreaWrapper from '@components/SafeAreaWrapper'
import DismissKeyboard from './DismissKeyboard'
import CustomScrollView from './CustomScrollView'

interface ScreenContainerProps {
  children: ReactNode
  wrapperStyle?: ViewStyle
  barStyle?: 'default' | 'light-content' | 'dark-content'
  imageBackground?: ImageSourcePropType
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  wrapperStyle,
  barStyle,
  imageBackground
}) => {
  return (
    <SafeAreaWrapper
      style={wrapperStyle}
      barStyle={barStyle}
      imageBackground={imageBackground}
    >
      <DismissKeyboard>
        <CustomScrollView>
          <View style={[styles.container]}>{children}</View>
        </CustomScrollView>
      </DismissKeyboard>
    </SafeAreaWrapper>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center' }
})

export default ScreenContainer
