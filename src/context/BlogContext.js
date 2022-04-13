import React, {useReducer} from 'react';
import Context from './Context';

const initState = [
    {title: "Post #1", id: 1, content: ''},
    {title: "Post #2", id: 2, content: ''}
]

const reducer = (posts, payload) => {
    const {type, title, id, content} = payload;

    switch (type) {
        case 'c':
            return [...posts, {title, id, content}]
        case 'u':
            posts.forEach(
                post => {
                    if (post.id === id) {
                        post.title = title;
                        post.content = content;
                    }
                }
            )
            return [...posts]
        case 'd':
            return posts.filter(post => post.id !== id)
        default:
            return posts;
    }
};

const addPost = (dispatch, title, content) => {
    const id = Math.floor(Math.random() * 1000000);

    return dispatch({
        type: 'c',
        id,
        title,
        content
    });
};

const deletePost = (dispatch, id) => {
    return dispatch({
        type: 'd',
        id
    });
}

const updatePost = (dispatch, id, title, content) => {
    return dispatch({
        type: 'u',
        id,
        title,
        content
    });
};

const actions = {
    addPost,
    deletePost,
    updatePost
};

export default Context(reducer, actions, initState);