import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sugar from './views/components/Sugar'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Sugar"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={Sugar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Syntactic"
      onPress={() =>
        navigation.navigate('Profile')
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const MyTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255, 0.0)',
  },
};



export default App;
