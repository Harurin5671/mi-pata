import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter'

type UseFontsReturnType = [boolean, Error | null]

export const useAppFonts = (): UseFontsReturnType => {
  return useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })
}
