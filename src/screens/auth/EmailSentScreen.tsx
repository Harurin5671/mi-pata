import React from 'react'
import { Text, View } from 'react-native'

import ScreenContainer from '@components/ScreenContainer'
import Spacer from '@components/Spacer'
import LogoWithSpacer from '@components/LogoWithSpacer'
import { globalStyles } from '@themes/globalStyles'
import CustomButton from '@components/CustomButton'
import { useNavigation } from '@react-navigation/native'

// interface EmailSentScreenProps {
//   navigation: any
// }

const EmailSentScreen: React.FC = () => {
  const navigation = useNavigation()

  return (
    <ScreenContainer wrapperStyle={{ backgroundColor: '#fff' }} barStyle='dark-content'>
      <Spacer height={110} />
      <View style={{ width: '90%', alignItems: 'center' }}>
        <Text
          style={[
            { fontSize: 28, fontWeight: '700', lineHeight: 42 },
            globalStyles.text
          ]}
        >
          ¡Te enviamos un correo!
        </Text>
        <Text
          style={[
            {
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 21,
              textAlign: 'center'
            },
            globalStyles.text
          ]}
        >
          Ingrese su correo electrónico para completar el registro de cuenta.
        </Text>
      </View>
      <LogoWithSpacer imageSource={require('@assets/images/png/email_sent_img.png')} height={53} />
      <Spacer height={38} />
      <CustomButton title='Llévame allá' onPress={() => { navigation.navigate('CompleteProfileScreen') }} fontWeight='500' textSize={14} />
      <Spacer height={12} />
      <CustomButton title='Regresar' onPress={() => { console.log('Pipipip') }} fontWeight='500' textSize={14} backgroundColor='#fff' borderColor='#374AA6' textColor='#374AA6' />
    </ScreenContainer>
  )
}

export default EmailSentScreen
