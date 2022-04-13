import React, {useContext} from 'react';
import BlogContext from "../context/BlogContext";
import Form from "../components/Form";

const CreateScreen = props => {
    const {dispatcher} = useContext(BlogContext.Context);
    const {navigation} = props;

    return <Form
        navigation={navigation}
        onSubmit={
            (title, content) => {
                dispatcher.addPost(title, content)
                navigation.navigate('Index')
            }
        }
    />
};

export default CreateScreen;