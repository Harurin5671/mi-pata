import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  type GestureResponderEvent,
  type ImageSourcePropType
} from 'react-native'
import { type HomeScreenProps } from '@interfaces/navigation'

import { globalStyles } from '@themes/globalStyles'
import ScreenContainer from '@components/ScreenContainer'

interface BtnSocialProps {
  onPress: (event: GestureResponderEvent) => void
  imageSource: ImageSourcePropType
}

const BtnSocial: React.FC<BtnSocialProps> = ({ onPress, imageSource }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
          // Sombra para iOS
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 8,
          marginRight: 15
        }}
      >
        <Image
          source={imageSource}
          style={{ height: 40, width: 40 }}
          resizeMode="contain"
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

interface AuthMainProps {
  onPress: (event: GestureResponderEvent) => void
}

const AuthMain: React.FC<AuthMainProps> = ({ onPress }) => {
  return (
    <>
      <Spacer height={100} />
      <Image source={require('@assets/images/Group 267.png')} />
      <Spacer height={100} />
      <CustomButton onPress={onPress} title="Crea una Cuenta" />
      <Spacer height={12} />
      <CustomButton onPress={onPress} title="Iniciar sesión" />
      <Spacer height={26} />
    </>
  )
}

// interface AutSocialProps {
//   // onPress: (event: GestureResponderEvent) => void
// }

const AutSocial: React.FC = () => {
  const handlePress = (): void => {
    // Lógica a ejecutar cuando se presiona el botón
    alert('El texto ingresado es: pipipip')
  }

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <View
          style={{ width: '30%', borderColor: '#E6E6E6', borderWidth: 0.5 }}
        />
        <Spacer width={15} />
        <Text style={[styles.text, globalStyles.text]}>o continuar con</Text>
        <Spacer width={15} />
        <View
          style={{ width: '30%', borderColor: '#E6E6E6', borderWidth: 0.5 }}
        />
      </View>
      <Spacer height={12} />
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        <BtnSocial
          onPress={handlePress}
          imageSource={require('@assets/images/png/google.png')}
        />
        <BtnSocial
          onPress={handlePress}
          imageSource={require('@assets/images/png/instagram.png')}
        />
        <BtnSocial
          onPress={handlePress}
          imageSource={require('@assets/images/png/facebook.png')}
        />
        <BtnSocial
          onPress={handlePress}
          imageSource={require('@assets/images/png/x.png')}
        />
      </View>
      <Spacer height={29} />
      <View style={{ width: '90%', alignItems: 'center' }}>
        <Text style={[{ fontSize: 12, color: '#828282' }, globalStyles.text]}>
        Al hacer clic en Continuar, acepta nuestros
        </Text>
        <Text style={[{ fontSize: 14, color: '#000000' }, globalStyles.text]}> Términos de servicio y Política de privacidad</Text>
      </View>
    </>
  )
}

interface SpacerProps {
  height?: number
  width?: number
}

const Spacer: React.FC<SpacerProps> = ({ width = 0, height = 10 }) => {
  return <View style={{ width, height }} />
}

interface CustomButtonProps {
  onPress: (event: GestureResponderEvent) => void
  title: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={[styles.buttonText, globalStyles.text]}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handlePress = (): void => {
    // Lógica a ejecutar cuando se presiona el botón
    alert('El texto ingresado es: pipipip')
  }

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <AuthMain onPress={handlePress} />
        <AutSocial />
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#374AA6',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  text: { fontSize: 14, color: '#828282' }
})

export default HomeScreen
