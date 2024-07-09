import React from 'react'
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View
} from 'react-native'

import ScreenContainer from '@components/ScreenContainer'
import Spacer from '@components/Spacer'
import CustomButton from '@components/CustomButton'
import LabeledTextInput from '@components/LabeledTextInput'

const CompleteProfileScreen: React.FC = () => {
  const { width } = Dimensions.get('window')

  return (
    <ScreenContainer
      imageBackground={require('@assets/images/png/background_radial.png')}
    >
      <ImageBackground
        style={{
          width: '100%',
          flex: 1,
          alignItems: 'center'
        }}
        source={require('@assets/images/png/background_radial.png')}
      >
        <Spacer height={167} />
        <View
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: '#fff',
            overflow: 'hidden',
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            padding: 20
          }}
        >
          <Spacer height={38} />
          <LabeledTextInput label="Nombre" />
          <Spacer height={12} />
          <LabeledTextInput label="Correo" />
          <Spacer height={12} />
          <LabeledTextInput label="Contraseña" secureTextEntry />
          <Spacer height={12} />
          <LabeledTextInput label="Confirmar contraseña" secureTextEntry />
          <Spacer height={50.5} />
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: '#E8E8E8',
                width: width * 0.8,
                height: 2
              }}
            />
          </View>
          <Spacer height={150} />
          <View
            style={{
              alignItems: 'center'
            }}
          >
            <CustomButton
              title="Completar"
              onPress={() => {
                console.log('hola')
              }}
              fontWeight="500"
              customWidth={width * 0.8}
              textSize={14}
            />
          </View>
        </View>
        <View style={styles.circle}>
          <Image
            source={require('@assets/images/png/img_perfil_men_default.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </ImageBackground>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    width: 139,
    height: 139,
    borderRadius: 100,
    top: 68,
    // overflow: 'hidden',
    backgroundColor: '#374AA6',
    shadowColor: '#EF2A39',
    shadowOffset: {
      width: 0,
      height: 11
    },
    shadowOpacity: 0.7,
    shadowRadius: 21,
    elevation: 10,
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 90 // Asegúrate de que la imagen también sea redonda
  }
})

export default CompleteProfileScreen
