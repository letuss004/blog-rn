import React, {useReducer} from 'react'


export default (reducer, actions, initState) => {
    let Context = React.createContext(null, null);

    const Provider = ({children}) => {
        const dispatcher = {}
        const [state, dispatch] = useReducer(reducer, initState);

        for (let key in actions) {
            if (key == 'addPost') {
                dispatcher[key] = (title, content) => actions[key](dispatch, title, content);
            } else if (key == 'deletePost') {
                dispatcher[key] = (id) => actions[key](dispatch, id);
            }
            // dispatcher[key] = (id, title, content) => actions[key](dispatch, id, title, content);
        }

        return <Context.Provider value={{state, dispatcher}}>
            {children}
        </Context.Provider>
    };

    return {Context, Provider}
}