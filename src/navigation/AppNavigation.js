import React from "react";

import {Main} from "../screens/Main";
import {Favorites} from "../screens/Favorites";
import {Search} from "../screens/Search";
import {Basket} from "../screens/Basket";
import {Product} from "../screens/Product";

import {AntDesign} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from "@react-navigation/stack";
import {THEME} from "../theme";
import {StyleSheet} from "react-native";


const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator()

export const TabNavigation = ({onOpen}) => {
  console.log(onOpen)
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let Name
            let name
            color = focused ? THEME.MAIN_COLOR : THEME.GREY_COLOR
            if (route.name === 'Main') {
              Name = AntDesign
              name = "home"
              return <Name color={color} name={name} size={32}/>
            } else if (route.name === 'Favorites') {
              Name = MaterialIcons
              name = "favorite-border"
              return <Name color={color} name={name} size={32}/>
            } else if (route.name === 'Search') {
              Name = Feather
              name = "search"
              return <Name color={color} name={name} size={32}/>
            } else if (route.name === 'Basket') {
              Name = Ionicons
              name = "cart-outline"
              return <Name color={color} name={name} size={32}/>
            }
          }
        })}
        sceneContainerStyle={{backgroundColor: THEME.BG_COLOR}}
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen
          name='Main'
          component={Main}
          initialParams={{onOpen}}
        />

        <Tab.Screen
          name='Favorites'
          component={Favorites}
          initialParams={styles}
        />

        <Tab.Screen
          name='Search'
          component={Search}
          initialParams={styles}
        />

        <Tab.Screen
          name='Basket'
          component={Basket}
          initialParams={styles}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

/*export const StackNavigation = props => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.BG_COLOR,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'normal',
          textTransform: 'uppercase'
        },
      }}>
      <Stack.Screen
        name='Main'
        component={Main}
        options={{headerTitle: () => <Header style={props.style}/>}}
        initialParams={styles}

      />

      <Stack.Screen
        name='Favorites'
        component={Favorites}
        options={{title: 'favorites'}}
        initialParams={styles}
      />

      <Stack.Screen
        name='Search'
        component={Search}
        options={{title: 'search'}}
        initialParams={styles}
      />

      <Stack.Screen
        name='Basket'
        component={Basket}
        options={{title: 'basket'}}
        initialParams={styles}
      />
    </Stack.Navigator>
  </NavigationContainer>
)*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    textTransform: 'uppercase',
    fontSize: 30,
  }
})