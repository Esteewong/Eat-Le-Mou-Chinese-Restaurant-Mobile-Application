import React from 'react';
import { SafeAreaView } from 'react-native';
import Toast from 'react-native-toast-message';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
        <NavigationContainer>
          <AppNavigator />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
