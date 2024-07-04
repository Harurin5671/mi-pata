import { useCallback, useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useAppFonts } from '../themes/fonts'

interface SplashScreenHookReturn {
  fontsLoaded: boolean
  onLayoutRootView: () => Promise<void>
}

export const useSplashScreen = (): SplashScreenHookReturn => {
  const [fontsLoaded] = useAppFonts()

  useEffect(() => {
    void SplashScreen.preventAutoHideAsync()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  return { fontsLoaded, onLayoutRootView }
}
