import SafeAreaWrapper from '@components/SafeAreaWrapper'
import Spacer from '@components/Spacer'
import { globalStyles } from '@themes/globalStyles'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'

// import ScreenContainer from '@components/ScreenContainer'

const CompleteProfileScreen: React.FC = () => {
  return (
    <SafeAreaWrapper
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
          <Spacer height={38}/>
          <View style={styles.container1}>
      <Text style={[styles.label, globalStyles.text]}>Nombre</Text>
      <TextInput
        style={[styles.input, globalStyles.text]}
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
    </SafeAreaWrapper>
  )
}

const styles = StyleSheet.create({
  container1: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#E1E1E1',
    borderRadius: 20,
    paddingTop: 4,
    paddingLeft: 20
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontSize: 16,
    color: '#808080',
    fontWeight: '500'
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    color: '#000',
    fontSize: 18,
    fontWeight: '500'
  },
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
