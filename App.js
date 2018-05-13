import React from 'react';
import { Button, View, Text, StyleSheet  } from 'react-native';

import { DrawerNavigator,createDrawerNavigator } from 'react-navigation'; // Version can be specified in package.json

import FirstScreen from './screens/firstScreen';
import SecondScreen from './screens/secondScreen';

const DrawerExample = createDrawerNavigator({
  First: {
    screen: FirstScreen,
  },
  Second: {
    screen: SecondScreen,
  },
});

/*const DrawerExample = DrawerNavigator (
  {
    First: {
      path: '/',
      screen: FirstScreen,
    },
    Second: {
      path: '/sent',
      screen: SecondScreen,
    }
  },
  {
    initialRouteName: 'First',
    drawerPosition: 'left'
  }
);*/

export default DrawerExample;
