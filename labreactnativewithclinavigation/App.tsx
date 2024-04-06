import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '././src/presentation/route/StackNavigator.tsx';
const App = () => {
  return (
    <NavigationContainer>
      {/*<Text>App</Text>*/}
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
