import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// import { Formik } from 'formik'
import * as Yup from 'yup'

import ScreenContainer from '@components/ScreenContainer'
import LogoWithSpacer from '@components/LogoWithSpacer'
import Spacer from '@components/Spacer'
import CustomInput from '@components/CustomInput'
import { globalStyles } from '@themes/globalStyles'
import CustomButton from '@components/CustomButton'
import AuthSocial from '@components/AuthSocial'
import Form from '@components/Form'
import { type FormikHelpers } from 'formik'

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Por favor ingresa un correo válido')
    .required('El correo es obligatorio'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('La contraseña es obligatoria')
})

const handleLoginSubmit = async (
  values: { email: string, password: string },
  formikHelpers: FormikHelpers<{ email: string, password: string }>
): Promise<void> => {
  // Manejo del envío del formulario de inicio de sesión
  console.log('Login Values:', values)
  formikHelpers.setSubmitting(false)
}

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
      <Form
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={handleLoginSubmit}
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
                placeholderTextColor="#828282"
                value={values.email}
                onChangeText={handleChange('email')}
                customWidth={Dimensions.get('window').width * 0.9}
                errorMessage={errors.email}
                errorStyle={styles.errorStyle}
                keyboardType='email-address'
              />
              {/* {errors.email !== ''
                ? (
                <Text style={{ color: 'red', width: '90%' }}>
                  {errors.email}
                </Text>
                  )
                : null} */}
              <Spacer height={20} />
              <CustomInput
                placeHolder="Contraseña"
                placeholderTextColor="#828282"
                value={values.password}
                onChangeText={handleChange('password')}
                customWidth={Dimensions.get('window').width * 0.9}
                errorMessage={errors.password}
                secureTextEntry
                errorStyle={styles.errorStyle}
              />
              {/* <Text style={{ color: 'red', width: '90%' }}>{errors.password}</Text> */}
              <Spacer height={20} />
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
      </Form>
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
  },
  errorStyle: { position: 'absolute', bottom: -20 }
})

export default LoginScreen
