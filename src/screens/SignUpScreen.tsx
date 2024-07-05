import React from 'react'
import { StyleSheet, Text, TextInput, type TextInputProps, View } from 'react-native'

import ScreenContainer from '@components/ScreenContainer'
import LogoWithSpacer from '@components/LogoWithSpacer'
import Spacer from '@components/Spacer'
import { globalStyles } from '@themes/globalStyles'
import CustomButton from '@components/CustomButton'
import AuthSocial from '@components/AuthSocial'

interface CustomInputProps extends TextInputProps {
  containerStyle?: object
  placeHolder: string
  placeHolderColor: string
}

const CustomInput: React.FC<CustomInputProps> = ({
  containerStyle,
  placeHolder,
  placeHolderColor,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderColor}
        {...props}
      />
    </View>
  )
}

const SignUpScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <LogoWithSpacer />
      <Spacer height={12} />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          paddingBottom: 2,
          paddingHorizontal: 25
        }}
      >
        <Text style={[styles.text, globalStyles.text]}>Crea una cuenta</Text>
        <Text style={[styles.subtitle, globalStyles.text]}>
          Ingrese su correo electrónico para registrarse en esta aplicación
        </Text>
      </View>
      <Spacer height={24} />
      <CustomInput
        placeHolder="email@correo.com"
        placeHolderColor="#828282"
        keyboardType="email-address"
      />
      <Spacer height={26} />
      <View style={{ alignItems: 'center' }}>
        <CustomButton
          title="Ingresa con e-mail"
          onPress={() => {
            console.log('hola')
          }}
          textSize={14}
        />
        <Spacer height={16} />
        <CustomButton
          title="Regresar"
          onPress={() => {
            console.log('hola')
          }}
          textSize={16}
          backgroundColor="#fff"
          textColor="#374AA6"
          borderColor="#374AA6"
          fontWeight="500"
        />
      </View>
      <Spacer height={16} />
      <View style={{ alignItems: 'center' }}>
        <AuthSocial />
      </View>
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

export default SignUpScreen
