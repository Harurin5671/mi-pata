import React from 'react'
import { StyleSheet } from 'react-native'
import { Input, type InputProps } from '@rneui/themed'

interface CustomInputProps extends InputProps {
  containerStyle?: object
  placeHolder: string
  customWidth?: number
}

const CustomInput: React.FC<CustomInputProps> = ({
  containerStyle,
  placeHolder,
  customWidth,
  ...props
}) => {
  const InputContainer = [
    styles.container,
    customWidth != null ? { width: customWidth } : {}
  ]

  return (
    <Input
      inputContainerStyle={{ borderBottomWidth: 0 }}
      containerStyle={InputContainer}
      placeholder={placeHolder}
      inputStyle={styles.text}
      {...props}
    />
    // <View style={[styles.container, containerStyle]}>
    //   {/* <TextInput
    //     style={styles.input}
    //     placeholder={placeHolder}
    //     placeholderTextColor={placeHolderColor}
    //     {...props}
    //   /> */}
    //   <Input
    //     inputContainerStyle={{ borderBottomWidth: 0 }}
    //     containerStyle={{ borderColor: '#E0E0E0', height: 40, borderWidth: 1, borderRadius: 25 }}
    //     placeholder={placeHolder}
    //     {...props}
    //   />
    // </View>
  )
}

const styles = StyleSheet.create({
  text: { color: '#000', fontSize: 18, fontWeight: '700' },
  container: {
    borderColor: '#E0E0E0',
    height: 40,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    paddingLeft: 15
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
