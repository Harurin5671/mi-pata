import React from 'react'
import { StyleSheet, Text, TextInput, type TextInputProps, View } from 'react-native'

import { globalStyles } from '@themes/globalStyles'

interface LabeledTextInputProps extends TextInputProps {
  label: string
}

const LabeledTextInput: React.FC<LabeledTextInputProps> = ({ label, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, globalStyles.text]}>{label}</Text>
      <TextInput style={[styles.input, globalStyles.text]} {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
  }
})

export default LabeledTextInput
