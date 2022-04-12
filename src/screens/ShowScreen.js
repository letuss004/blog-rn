import React, {useContext} from 'react';
import BlogContext from "../context/BlogContext";
import {Text, TouchableOpacity, View} from "react-native";
import {EvilIcons} from "@expo/vector-icons";

const ShowScreen = props => {
    const {state, dispatch} = useContext(BlogContext.Context);
    const {navigation} = props;
    const post = state.find(
        post => post.id === navigation.getParam('id')
    );
    return <View>
        <Text>{post.title}</Text>
        <Text>{post.content}</Text>
    </View>
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                <EvilIcons name="pencil" size={35}/>
            </TouchableOpacity>
        ),
    };
}

export default ShowScreen;