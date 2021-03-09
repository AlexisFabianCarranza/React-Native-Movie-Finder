import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/utils/navigation/Navigator';
import {MoviesProvider} from './src/utils/context/MoviesContext';
import defaultTheme from './src/utils/theme/DefaultTheme';

const theme = {
  ...DefaultTheme,
  roundness: 10,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#EDB709',
    surface: '#001A33',
    background: '#001A33',
    text: '#fff',
    placeholder: '#fff',
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <MoviesProvider>
        <PaperProvider theme={defaultTheme}>
          <Navigator />
        </PaperProvider>
      </MoviesProvider>
    </NavigationContainer>
  );
};

export default App;
