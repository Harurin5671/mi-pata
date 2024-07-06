import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ScreenContainer from '@components/ScreenContainer'
import LogoWithSpacer from '@components/LogoWithSpacer'
import Spacer from '@components/Spacer'
import CustomInput from '@components/CustomInput'
import { globalStyles } from '@themes/globalStyles'
import CustomButton from '@components/CustomButton'
import AuthSocial from '@components/AuthSocial'

const LoginScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <LogoWithSpacer imageSource={require('@assets/images/logo_mi_pata_blue.png')} height={100}/>
      <Spacer height={12} />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          paddingBottom: 2,
          paddingHorizontal: 25
        }}
      >
        <Text style={[styles.text, globalStyles.text]}>Inicia Sesión</Text>
        <Text style={[styles.subtitle, globalStyles.text]}>
          Ingrese su correo electrónico para iniciar sesión en esta aplicación
        </Text>
      </View>
      <Spacer height={24} />
      <CustomInput placeHolder="email@correo.com" placeHolderColor="#828282;" />
      <Spacer height={12} />
      <CustomInput placeHolder="Contraseña" placeHolderColor="#828282;" />
      <Spacer height={12} />
      <CustomButton
        title="Iniciar sesión"
        onPress={() => {
          console.log('🚀 ~ Hola')
        }}
        textSize={14}
        fontWeight='500'
      />
      <Spacer height={12} />
      <CustomButton
        title="Regresar"
        onPress={() => {
          console.log('🚀 ~ Hola')
        }}
        textSize={14}
        fontWeight='500'
        backgroundColor='#fff'
        textColor='#374AA6'
        borderColor='#374AA6'
      />
      <Spacer height={12} />
      <AuthSocial />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  text: { color: '#000', fontSize: 18, fontWeight: '700' },
  subtitle: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400'
  },
  container: { width: '100%', paddingHorizontal: 20 },
  input: {
    height: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    color: '#828282'
  }
})

export default LoginScreen
