import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/utils/navigation/Navigator';
import {MoviesProvider} from './src/utils/context/MoviesContext';
import defaultTheme from './src/utils/theme/DefaultTheme';

const App = () => {
  return (
    <NavigationContainer theme={defaultTheme}>
      <MoviesProvider>
        <PaperProvider theme={defaultTheme}>
          <Navigator />
        </PaperProvider>
      </MoviesProvider>
    </NavigationContainer>
  );
};

export default App;
