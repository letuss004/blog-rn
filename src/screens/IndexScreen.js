import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';
import Context, {Provider} from "../context/Context";


const IndexScreen = () => {
    const {posts, dispatch} = useContext(Context);

    return <View>
        <FlatList
            data={posts}
            keyExtractor={post => {
                console.log(post.title);
                return post.title;
            }}
            renderItem={
                ({item}) => <Text>{item.title}</Text>
            }
        />
        <Button
            onPress={() => dispatch({
                type: 'c',
                title: `Post #${posts.length + 1}`
            })}
            title={'Add post'}
        />
        <Button
            onPress={() => dispatch({
                type: 'd'
            })}
            title={'Delete post'}
        />
        <Button
            onPress={() => dispatch({
                type: 'u',
                title: 'Edit the last element'
            })}
            title={'Edit the last post'}
        />
    </View>
}


export default IndexScreen;