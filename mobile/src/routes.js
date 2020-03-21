import React from 'react';
// import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  SignIn,
  Dashboard,
  Profile,
  Details,
  ProblemForm,
  ProblemList,
} from '~/pages';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function DashboardTab({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerTransparent: true,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="chevron-left" size={24} color="#fff" />
          </TouchableOpacity>
        ),
      }}
      initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Detalhes da encomenda',
        }}
      />
      <Stack.Screen
        name="ProblemForm"
        component={ProblemForm}
        options={{
          title: 'Informar problema',
        }}
      />
      <Stack.Screen
        name="ProblemList"
        component={ProblemList}
        options={{
          title: 'Visualizar problemas',
        }}
      />
    </Stack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return (
    <NavigationContainer>
      {!isSigned ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      ) : (
        <Tabs.Navigator
          tabBarOptions={{
            activeTintColor: '#7D40E7',
            inactiveTintColor: '#999',
            keyboardHidesTabBar: true,
          }}
          backBehavior="initialRoute"
          shifting
          sceneAnimationEnabled={false}>
          <Tabs.Screen
            name="Dashboard"
            component={DashboardTab}
            options={{
              unmountOnBlur: true,
              tabBarLabel: 'Dashboard',
              tabBarIcon: ({color, size}) => (
                <Icon name="reorder" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Meu Perfil',
              tabBarIcon: ({color, size}) => (
                <Icon name="account-circle" size={size} color={color} />
              ),
            }}
          />
        </Tabs.Navigator>
      )}
    </NavigationContainer>
  );
}

// export default function Routes() {
//   const singed = useSelector(state => state.auth.singed);

//   function DashboardTab({navigation}) {
//     return (
//       <Stack.Navigator
//         screenOptions={{
//           headerBackTitleVisible: false,
//           headerTitleAlign: 'center',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//           headerTintColor: '#fff',
//           headerTransparent: true,
//           headerLeft: () => (
//             <TouchableOpacity
//               onPress={() => {
//                 navigation.goBack();
//               }}>
//               <Icon name="chevron-left" size={24} color="#fff" />
//             </TouchableOpacity>
//           ),
//         }}
//         initialRouteName="Details">
//         <Stack.Screen
//           name="Dashboard"
//           component={Dashboard}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <Stack.Screen
//           name="Details"
//           component={Details}
//           options={{
//             title: 'Detalhes da encomenda',
//           }}
//         />
//       </Stack.Navigator>
//     );
//   }

//   return (
//     <NavigationContainer>
//       {!singed ? (
//         <Stack.Navigator headerMode="none">
//           <Stack.Screen name="SignIn" component={SignIn} />
//         </Stack.Navigator>
//       ) : (
//         <Tabs.Navigator
//           tabBarOptions={{
//             activeTintColor: '#7D40E7',
//             inactiveTintColor: '#999',
//             keyboardHidesTabBar: true,
//           }}
//           backBehavior="initialRoute"
//           shifting
//           sceneAnimationEnabled={false}>
//           <Tabs.Screen
//             name="Dashboard"
//             component={DashboardTab}
//             options={{
//               unmountOnBlur: true,
//               tabBarLabel: 'Dashboard',
//               tabBarIcon: ({color, size}) => (
//                 <Icon name="reorder" size={size} color={color} />
//               ),
//             }}
//           />
//           <Tabs.Screen
//             name="Profile"
//             component={Profile}
//             options={{
//               tabBarLabel: 'Meu Perfil',
//               tabBarIcon: ({color, size}) => (
//                 <Icon name="account-circle" size={size} color={color} />
//               ),
//             }}
//           />
//         </Tabs.Navigator>
//       )}
//     </NavigationContainer>
//   );
// }
