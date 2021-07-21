import React from "react";

import {Main} from "../screens/Main";
import {Favorites} from "../screens/Favorites";
import {Search} from "../screens/Search";
import {Basket} from "../screens/Basket";

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator()

export const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Main'
        component={Main}
        options={{title: 'main'}}

      />

      <Stack.Screen
        name='Favorites'
        component={Favorites}
        options={{title: 'favorites'}}
      />

      <Stack.Screen
        name='Search'
        component={Search}
        options={{title: 'search'}}

      />

      <Stack.Screen
        name='Basket'
        component={Basket}
        options={{title: 'basket'}}

      />
    </Stack.Navigator>
  </NavigationContainer>
)