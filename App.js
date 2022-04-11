import React from 'react';
import IndexScreen from "./src/screens/IndexScreen";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import {Provider} from './src/context/Context';

const navigator = createStackNavigator({
    Index: IndexScreen
}, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
        title: 'Blogs'
    }
})
const App = createAppContainer(navigator);

export default () => (
    <Provider>
        <App/>
    </Provider>
);