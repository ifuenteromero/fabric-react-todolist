import React, { useContext, useEffect,useState } from 'react';
import TaskItem from './TaskItem';
import { ToDoContext } from '../context/ToDoContext';


export default function TaskList() {
    const {tasks,filter,filteredTasks,setFilteredTasks} = useContext(ToDoContext);

    useEffect(() => {
        let newTasks;
        switch(filter) {
            case "all":
                newTasks = tasks;
                break;
            case "active":
                newTasks = tasks.filter(item => item.checked===false);
                break;
            case "completed":
                newTasks = tasks.filter(item=>item.checked===true);
                break;
            default:
                alert("error")
        }
        setFilteredTasks(newTasks);
    }
    , [tasks,filter]);

    return (
        <ul>
        {filteredTasks
            .map(item=> {
            return(             
                <li 
                className="todo-list__element" 
                key={item.id}>
                    <TaskItem 
                        name={item.name} 
                        checked={item.checked} 
                        id={item.id} 
                        editable={item.editable} 
                    />
                </li>
            )
            })         
        }
        </ul>
    )
}

