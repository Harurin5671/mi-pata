import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import ScreenContainer from '@components/ScreenContainer'
import LogoWithSpacer from '@components/LogoWithSpacer'
import Spacer from '@components/Spacer'
import CustomInput from '@components/CustomInput'
import { globalStyles } from '@themes/globalStyles'
import CustomButton from '@components/CustomButton'
import AuthSocial from '@components/AuthSocial'

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Por favor ingresa un correo válido')
    .required('El correo es obligatorio'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('La contraseña es obligatoria')
})

const LoginScreen: React.FC = () => {
  const navigation = useNavigation()

  return (
    <ScreenContainer
      wrapperStyle={{ backgroundColor: '#fff' }}
      barStyle="dark-content"
    >
      <LogoWithSpacer
        imageSource={require('@assets/images/logo_mi_pata_blue.png')}
        height={100}
      />
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
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          // Aquí puedes manejar el envío del formulario
          console.log(values)
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched
        }) => {
          const isFormInvalid =
            values.email.trim() === '' ||
            values.password.trim() === '' ||
            Boolean(errors.email) ||
            Boolean(errors.password)

          return (
            <View style={{ alignItems: 'center', width: '100%' }}>
              <Spacer height={24} />
              <CustomInput
                placeHolder="email@correo.com"
                placeholderTextColor='#828282'
                value={values.email}
                onChangeText={handleChange('email')}
                customWidth={Dimensions.get('window').width * 0.9}
              />
              <Text style={{ color: 'red', width: '90%' }}>{errors.email}</Text>
              <Spacer height={7} />
              <CustomInput
                placeHolder="Contraseña"
                placeholderTextColor='#828282'
                value={values.password}
                onChangeText={handleChange('password')}
                customWidth={Dimensions.get('window').width * 0.9}
                secureTextEntry
              />
              <Text style={{ color: 'red', width: '90%' }}>{errors.password}</Text>
              <Spacer height={7} />
              <CustomButton
                title="Iniciar sesión"
                onPress={handleSubmit}
                textSize={14}
                fontWeight="500"
                disabled={isFormInvalid}
              />
              <Spacer height={12} />
              <CustomButton
                title="Regresar"
                onPress={() => {
                  navigation.goBack()
                }}
                textSize={14}
                fontWeight="500"
                backgroundColor="#fff"
                textColor="#374AA6"
                borderColor="#374AA6"
              />
            </View>
          )
        }}
      </Formik>
      {/* <Spacer height={24} />
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
          navigation.goBack()
        }}
        textSize={14}
        fontWeight='500'
        backgroundColor='#fff'
        textColor='#374AA6'
        borderColor='#374AA6'
      /> */}
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
