import React, {createContext, useState} from 'react';

export const ToDoContext = createContext();

export const ToDoProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const [filteredTasks,setFilteredTasks] = useState(tasks)

    return (
        <ToDoContext.Provider value={{tasks, setTasks, filter, setFilter,filteredTasks,setFilteredTasks}}>
            {children}
        </ToDoContext.Provider>
    )
}