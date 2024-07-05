import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import { type HomeScreenProps } from '@interfaces/navigation'
import ScreenContainer from '@components/ScreenContainer'
import AutSocial from '@components/AuthSocial'
import AuthMain from '@components/AuthMain'

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <AuthMain navigation={navigation} />
        <AutSocial />
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' }
})

export default HomeScreen
