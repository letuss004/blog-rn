import React, {useContext, useState} from 'react';
import {TextInput, View, Text, Button, StyleSheet} from "react-native";
import BlogContext from "../context/BlogContext";

const CreateScreen = props => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {dispatcher} = useContext(BlogContext.Context);
    const {navigation} = props;

    return <View>
        <Text style={styles.label}>Enter title: </Text>
        <TextInput
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
        />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput
            style={styles.input}
            value={content}
            onChangeText={text => setContent(text)}
        />
        <Button
            title={'Submit'}
            onPress={() => {
                dispatcher.addPost(title, content);
                navigation.navigate('Index')
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black'
    },
    label: {
        fontSize: 20,
        marginBottom: 10
    }
})

export default CreateScreen;