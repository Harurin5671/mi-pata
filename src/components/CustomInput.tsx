import React from 'react'
import { StyleSheet, Text, type TextInputProps, View } from 'react-native'
import { Input, type InputProps } from '@rneui/themed'

interface CustomInputProps extends InputProps {
  containerStyle?: object
  placeHolder: string
  customWidth?: number
  customHeight?: number
  label?: string
  keyboardType?: TextInputProps['keyboardType']
}

const CustomInput: React.FC<CustomInputProps> = ({
  containerStyle,
  placeHolder,
  customWidth,
  customHeight,
  label,
  keyboardType,
  ...props
}) => {
  const inputContainer = [
    styles.container,
    customWidth != null ? { width: customWidth } : {},
    customHeight != null ? { height: customHeight } : {}
  ]

  return (
    <View style={inputContainer}>
      {label != null && <Text style={styles.label}>{label}</Text>}
      <Input
        containerStyle={{ height: 40 }}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        placeholder={placeHolder}
        inputStyle={styles.text}
        keyboardType={keyboardType}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    top: -10,
    left: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontSize: 14,
    color: '#808080',
    fontWeight: '500',
    zIndex: 1
  },
  text: { color: '#000', fontSize: 18, fontWeight: '700', paddingLeft: 15 },
  container: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    height: 40,
    borderRadius: 25
  },
  subtitle: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400'
  },
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
