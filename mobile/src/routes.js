import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SignIn, Dashboard, Profile} from '~/pages';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function Routes() {
  const singed = useSelector(state => state.auth.singed);

  return (
    <NavigationContainer>
      {!singed ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      ) : (
        <Tabs.Navigator
          tabBarOptions={{
            activeTintColor: '#7D40E7',
            inactiveTintColor: '#999999',
          }}>
          <Tabs.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              tabBarLabel: 'Dashboard',
              tabBarIcon: ({color}) => (
                <Icon name="reorder" size={20} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Meu Perfil',
              tabBarIcon: ({color}) => (
                <Icon name="account-circle" size={20} color={color} />
              ),
            }}
          />
        </Tabs.Navigator>
      )}
    </NavigationContainer>
  );
}
