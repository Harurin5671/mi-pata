import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import BtnSocial from '@components/BtnSocial'
import Spacer from '@components/Spacer'
import { globalStyles } from '@themes/globalStyles'

const TyC: React.FC = () => {
  return (
    <>
      <View style={{ width: '90%', alignItems: 'center' }}>
        <Text style={[{ fontSize: 12, color: '#828282' }, globalStyles.text]}>
        Al hacer clic en Continuar, acepta nuestros
        </Text>
        <Text style={[{ fontSize: 14, color: '#000000' }, globalStyles.text]}> Términos de servicio y Política de privacidad</Text>
      </View>
    </>
  )
}

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
      <TyC />
    </>
  )
}

const styles = StyleSheet.create({
  text: { fontSize: 14, color: '#828282' }
})

export default AutSocial
