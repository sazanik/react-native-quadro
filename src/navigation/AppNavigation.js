import React from "react";

import {Main} from "../screens/Main";
import {Favorites} from "../screens/Favorites";
import {Search} from "../screens/Search";
import {Basket} from "../screens/Basket";

// import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Header} from "../components/Header";
import {THEME} from "../theme";
import {StyleSheet} from "react-native";

const Tab = createBottomTabNavigator()
// const Stack = createStackNavigator()

export const TabNavigation = props => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Main'
          component={Main}
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
    backgroundColor: THEME.BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    textTransform: 'uppercase',
    fontSize: 30,
  }
})