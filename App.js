import React from 'react';
import IndexScreen from "./src/screens/IndexScreen";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import BlogContext from './src/context/BlogContext';
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

const navigator = createStackNavigator({
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen
}, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
        title: 'Blogs'
    }
})
const App = createAppContainer(navigator);

export default () => (
    <BlogContext.Provider>
        <App/>
    </BlogContext.Provider>
);