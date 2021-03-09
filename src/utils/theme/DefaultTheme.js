import {DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';

export default {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  roundness: 12,
  dark: true,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#0077FF',
    primaryLight: '#6AA5FF',
    primaryDark: '#004DCB',
    text: '#FFFFFF',
    drawerColor: '#001A33',
    headerText: '#ffffff',
    placeholder: '#b0b0b0',
    background: '#001A33',
    surface: '#001A33',
    secondary: '#242424',
    secondaryLight: '#484848',
    secondaryDark: '#0E0E0E',
    error: '#E53935',
    warning: '#FBC02D',
    success: '#4CAF50',
  },
};
