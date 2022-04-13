import React, {useState} from 'react';
import {TextInput, View, Text, Button, StyleSheet} from "react-native";

const Form = (props) => {
    const {initTitle, initContent, onSubmit, id} = props
    const [title, setTitle] = useState(initTitle);
    const [content, setContent] = useState(initContent);

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
            onPress={
                () => (id) ? onSubmit(id, title, content) : onSubmit(title, content)
            }
        />
    </View>
};

Form.defaultProps = {
    initTitle: '',
    initContent: '',
    onSubmit: () => {
    },
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

export default Form;