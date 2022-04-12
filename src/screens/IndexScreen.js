import React, {useContext} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, FlatList, Button} from 'react-native';
import BlogContext from "../context/BlogContext";
import {AntDesign, Feather} from '@expo/vector-icons';


const IndexScreen = props => {
    const {state, dispatcher} = useContext(BlogContext.Context);
    const {navigation} = props;

    return <>
        <FlatList
            data={state}
            renderItem={
                ({item}) => (
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={
                                () => navigation.navigate('Show', {id: item.id})
                            }>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => dispatcher.deletePost(item.id)}>
                            <AntDesign
                                name="delete"
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
            keyExtractor={
                post => post.title
            }
        />
    </>
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30}/>
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    icon: {
        color: 'red',
        fontSize: 20,
        marginRight: 10
    },
    title: {
        fontSize: 20,
        marginLeft: 10
    }
})


export default IndexScreen;