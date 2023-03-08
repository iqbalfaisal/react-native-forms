import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SideMenu from './SideMenu';

const Stack = createNativeStackNavigator();

export default function BottomTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={SideMenu}
      />
    </Stack.Navigator>
  );
}
