import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import {Home} from '../pages/Home';
import {Data} from '../pages/Data';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
            name="Home"
            component={Home}
            />
            <Screen
            name="Data"
            component={Data}
            />

        </Navigator>
    )
}