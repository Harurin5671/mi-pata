import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View, type GestureResponderEvent } from 'react-native'
import { globalStyles } from '@themes/globalStyles'

interface CustomButtonProps {
  onPress: (event: GestureResponderEvent) => void
  title: string
  backgroundColor?: string
  textColor?: string
  textSize?: number
  borderColor?: string
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title, backgroundColor, textColor, textSize, borderColor, fontWeight }) => {
  const buttonStyle = [
    styles.button,
    (backgroundColor != null) ? { backgroundColor } : {},
    (borderColor != null) ? { borderColor, borderWidth: 1 } : {}
  ]

  const textStyle = [
    styles.buttonText,
    globalStyles.text,
    (textColor != null) ? { color: textColor } : {},
    (textSize != null) ? { fontSize: textSize } : {},
    (fontWeight != null) ? { fontWeight } : {}
  ]

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={buttonStyle}>
        <Text style={textStyle}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default CustomButton
