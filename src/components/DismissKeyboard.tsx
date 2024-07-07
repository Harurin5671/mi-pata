import React, { type ReactNode } from 'react'
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native'

interface DismissKeyboardProps {
  children: ReactNode
}

const DismissKeyboard: React.FC<DismissKeyboardProps> = ({ children }) => {
  const handleDismiss = (): void => {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={handleDismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})

export default DismissKeyboard
