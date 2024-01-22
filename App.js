import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';
import WelcomeScreen from './screens/WelcomeScreen'
import UserName from './screens/UserName';
import BreakfastPage from './screens/BreakfastPage';
import LunchPage from './screens/LunchPage';
import DinnerPage from './screens/DinnerPage';
import DayScreen from './screens/DayScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreens" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="UserName" component={UserName} />
        <Stack.Screen name="HomeScreens" component={HomeScreens} />
        <Stack.Screen name="BreakfastPage" component={BreakfastPage} />
        <Stack.Screen name="LunchPage" component={LunchPage} />
        <Stack.Screen name="DinnerPage" component={DinnerPage} />
        <Stack.Screen name="DayScreen" component={DayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;