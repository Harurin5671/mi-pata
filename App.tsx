import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppNavigator from '@navigation/AppNavigator'
import { useSplashScreen } from '@hooks/useSplashScreen'

const App: React.FC = () => {
  const { fontsLoaded, onLayoutRootView } = useSplashScreen()

  useEffect(() => {
    const handleLayout = async (): Promise<void> => {
      if (fontsLoaded) {
        await onLayoutRootView()
      }
    }

    void handleLayout()
  }, [fontsLoaded, onLayoutRootView])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  )
}

export default App
