import React from 'react';
import {createStackNavigator} from "react-navigation";

import Login from '../screens/auth/LoginScreen'
import Register from '../screens/auth/RegisterScreen'

const AuthNavigator = createStackNavigator({
        Register: {screen: Register},
        Login: {screen: Login}
    },
    {
        defaultNavigationOptions: {
            header: null,
        },
        initialRouteName: 'Login',
    }
);
export default AuthNavigator;