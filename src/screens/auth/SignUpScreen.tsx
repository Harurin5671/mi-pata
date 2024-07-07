import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ScreenContainer from '@components/ScreenContainer'
import LogoWithSpacer from '@components/LogoWithSpacer'
import Spacer from '@components/Spacer'
import { globalStyles } from '@themes/globalStyles'
import CustomButton from '@components/CustomButton'
import AuthSocial from '@components/AuthSocial'
import CustomInput from '@components/CustomInput'
import { useNavigation } from '@react-navigation/native'
// import useNavigationHandler from '@hooks/useNavigationHandler'

// interface SignUpScreenProps {
//   navigation: any
// }

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation()
  return (
    <ScreenContainer wrapperStyle={{ backgroundColor: '#fff' }} barStyle='dark-content'>
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
        <CustomButton
          title="Ingresa con e-mail"
          onPress={() => { navigation.navigate('EmailSentScreen') }}
          textSize={14}
        />
        <Spacer height={16} />
        <CustomButton
          title="Regresar"
          onPress={() => {
            navigation.goBack()
          }}
          textSize={16}
          backgroundColor="#fff"
          textColor="#374AA6"
          borderColor="#374AA6"
          fontWeight="500"
        />
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
