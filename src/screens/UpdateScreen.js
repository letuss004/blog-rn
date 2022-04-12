import React, {useContext} from 'react';
import BlogContext from "../context/BlogContext";
import Form from "../components/Form";

const UpdateScreen = props => {
    const {state, dispatcher} = useContext(BlogContext.Context);
    const {navigation} = props;
    const post = state.find(
        post => post.id === navigation.getParam('id')
    );

    return <Form
        navigation={navigation}
        initTitle={post.title}
        initContent={post.content}
        id={post.id}
        onSubmit={(id, title, content) => dispatcher.updatePost(id, title, content)}
    />
};


export default UpdateScreen;