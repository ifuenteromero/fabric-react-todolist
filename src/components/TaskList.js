import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { ToDoContext } from '../context/ToDoContext';
import {TaskItemProvider} from '../context/TaskItemContext'

export default function TaskList() {
    const {tasks,filter} = useContext(ToDoContext);

    let filteredTasks;
    switch(filter) {
        
        case "all":
            filteredTasks = tasks;
            break;
        case "active":
            filteredTasks = tasks.filter(item => item.checked===false);
            break;
        case "completed":
            filteredTasks = tasks.filter(item=>item.checked===true);
            break;
        default:
            alert("error")
    }
   
    return (
        <ul>
        {filteredTasks
            .map(item=> {
                return(  
                    <TaskItemProvider key={item.id} >           
                        <li 
                        className="todo-list__element" 
                        >
                            <TaskItem 
                                name={item.name} 
                                checked={item.checked} 
                                id={item.id} 
                            />
                        </li>
                    </TaskItemProvider>
                )
            })         
        }
        </ul>
    )
}

