import React from 'react'
import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native'

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

export default CustomInput
