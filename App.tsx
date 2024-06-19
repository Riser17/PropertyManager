import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';

import HomeScreen from './src/screens/home/HomeScreen';
import store from './src/redux/store';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TopTabNavigator from './src/screens/appartment/TopTabNavigator';

type RootStackParamList = {
  Home: undefined;
  TopTabNavigator: {intialTabIndex?: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
LogBox.ignoreAllLogs();

export default function App(props: {navigation: void[]}) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          {...{
            initialRouteName: 'Home', //Login
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              title: 'Green Sky Apartment',
              headerTitleStyle: {
                color: '#07F3F3',
                fontSize: 14,
                fontWeight: '400',
              },
              headerStyle: {backgroundColor: '#00324E'},
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.pop()}>
                  <Icon name="arrow-back-ios" size={22} color={'#07F3F3'} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="TopTabNavigator"
            component={TopTabNavigator}
            options={({navigation}) => ({
              title: 'Green Sky Apartment',
              headerTitleStyle: {
                color: '#07F3F3',
                fontSize: 14,
                fontWeight: '400',
              },
              headerStyle: {backgroundColor: '#00324E'},
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.pop()}>
                  <Icon name="arrow-back-ios" size={22} color={'#07F3F3'} />
                </TouchableOpacity>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
