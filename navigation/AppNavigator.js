import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';


export default createAppContainer(createSwitchNavigator(
    {
        Main: MainNavigator,
        Auth: AuthNavigator
    },
    {
        initialRouteName: 'Auth',
    }
));