import { ColorTheme, darkColors, lightColors } from '@styles/colors';
import { useColorScheme as _useColorScheme } from 'react-native';

export function useColorScheme(): ColorTheme {
  const colorScheme = _useColorScheme();
  return colorScheme === 'dark' ? darkColors : lightColors;
}

