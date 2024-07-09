import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { Button, type ButtonProps } from '@rneui/themed'
import { globalStyles } from '@themes/globalStyles'

interface CustomButtonProps extends ButtonProps {
  onPress: () => void
  title: string
  backgroundColor?: string
  textColor?: string
  textSize?: number
  borderColor?: string
  fontWeight?:
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  customWidth?: number
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  backgroundColor,
  textColor,
  textSize,
  borderColor,
  fontWeight,
  customWidth,
  ...props
}) => {
  const buttonStyle = [
    styles.button,
    backgroundColor != null ? { backgroundColor } : {},
    borderColor != null ? { borderColor, borderWidth: 1 } : {},
    customWidth != null ? { width: customWidth } : {}
  ]

  const textStyle = [
    styles.buttonText,
    globalStyles.text,
    textColor != null ? { color: textColor } : {},
    textSize != null ? { fontSize: textSize } : {},
    fontWeight != null ? { fontWeight } : {}
  ]

  return (
    <Button
      onPress={onPress}
      buttonStyle={buttonStyle}
      titleStyle={textStyle}
      title={title}
      { ...props}
    />
    // <TouchableWithoutFeedback onPress={onPress}>
    //   <View style={buttonStyle}>
    //     <Text style={textStyle}>{title}</Text>
    //   </View>
    // </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width * 0.9,
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
