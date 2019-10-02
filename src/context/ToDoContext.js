import React, {createContext, useState} from 'react';

export const ToDoContext = createContext();

export const ToDoProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const [theme, setTheme] = useState('green');

    return (
        <ToDoContext.Provider value={{tasks, setTasks, filter, setFilter, theme, setTheme}}>
            {children}
        </ToDoContext.Provider>
    )
}