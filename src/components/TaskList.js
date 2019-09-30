import React, { useContext, useEffect,useState } from 'react';
import TaskItem from './TaskItem';
import { ToDoContext } from '../context/ToDoContext';


export default function TaskList() {
    const {tasks,filter} = useContext(ToDoContext);
    const [filteredTasks,setFilteredTasks] = useState(tasks)

    useEffect(
        ()=>{
            let newTasks;
            if(filter==='all'){
                newTasks = [...tasks]
            }
            else if (filter==='active'){
                newTasks = tasks.filter(item => item.checked===false)
            }
            else if (filter==='completed'){
                newTasks = tasks.filter(item=>item.checked===true)
            }
            setFilteredTasks(newTasks);
        }
        , [tasks,filter])

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

