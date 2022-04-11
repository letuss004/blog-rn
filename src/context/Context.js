import React, {useReducer} from 'react';

const Context = React.createContext(null, null);


export const Provider = ({children}) => {
    const [posts, dispatch] = useReducer(reducer, [
        {title: "Post #1"},
        {title: "Post #2"}
    ]);
    const value = {posts, dispatch};
    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}

const reducer = (posts, payload) => {
    const {type, title} = payload;
    switch (type) {
        case 'c':
            return [...posts, {title}];
        case 'u':
            posts[posts.length - 1].title = title
            return posts;
        case 'd':
            posts.pop()
            return posts;
        default:
            return posts;
    }
}

export default Context;