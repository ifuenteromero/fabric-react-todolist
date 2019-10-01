import React, {createContext, useState} from 'react';

export const TaskItemContext = createContext();

export const TaskItemProvider = ({children}) => {
    const [editable, setEditable] = useState(false);

    return (
        <TaskItemContext.Provider value={{editable, setEditable}}>
            {children}
        </TaskItemContext.Provider>
    )
}