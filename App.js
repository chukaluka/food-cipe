import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';
import WelcomeScreen from './screens/WelcomeScreen'
import UserName from './screens/UserName';
import RoutinesPage from './screens/RoutinesPage';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="UserName" component={UserName} />
        <Stack.Screen name="HomeScreens" component={HomeScreens} />
        <Stack.Screen name="RoutinesPage" component={RoutinesPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;