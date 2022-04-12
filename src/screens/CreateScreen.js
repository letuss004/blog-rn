import React, {useContext} from 'react';
import BlogContext from "../context/BlogContext";
import Form from "../components/Form";

const CreateScreen = props => {
    const {dispatcher} = useContext(BlogContext.Context);
    const {navigation} = props;

    return <Form
        navigation={navigation}
        initTitle={''}
        initContent={''}
        onSubmit={(title, content) => dispatcher.addPost(title, content)}
    />
};

export default CreateScreen;