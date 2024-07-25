import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen.jsx';
import ProfilePage from './src/Screens/ProfileScreen.jsx';
import ResultScreen from './src/Screens/ResultScreen.jsx';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfilePage}/>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      <Stack.Screen name="Result" component={ResultScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;