import React from 'react';
import {createStackNavigator} from "react-navigation";

import HomeScreen from '../screens/HomeScreen'

const MainNavigator = createStackNavigator({
        Home: {screen: HomeScreen},
    },
    {
        defaultNavigationOptions: {
            header: null,
        },
        initialRouteName: 'Home',
    }
);
export default MainNavigator;