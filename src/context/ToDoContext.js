import React, {createContext, useState} from 'react';

export const ToDoContext = createContext();

export const ToDoProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    return (
        <ToDoContext.Provider value={{tasks, setTasks}}>
            {children}
        </ToDoContext.Provider>
    )
}