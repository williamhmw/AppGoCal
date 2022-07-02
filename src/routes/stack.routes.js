import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { Home } from '../pages/Home';
import { Data } from '../pages/Data';
import { Result } from '../pages/Result';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false
            }}
            
            />
            <Screen
            name="Data"
            component={Data}
            options={{
                headerShown: false
            }}
            />
            <Screen
            name="Result"
            component={Result}
            options={{
                headerShown: false
            }}
            />
        </Navigator>
    )
}