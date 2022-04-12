import React, {useReducer} from 'react';
import Context from './Context';

const initState = [
    {title: "Post #1", id: 1},
    {title: "Post #2", id: 2}
]

const reducer = (posts, payload) => {
    const {type, title, id} = payload;

    switch (type) {
        case 'c':
            return [...posts, {title, id}]
        case 'u':
            posts[posts.length - 1].title = title;
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

const editPost = (dispatch, id, title) => {
    return dispatch({
        type: 'u',
        id,
        title
    });
};

const actions = {
    addPost,
    deletePost,
};

export default Context(reducer, actions, initState);