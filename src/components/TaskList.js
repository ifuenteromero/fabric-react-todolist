import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { ToDoContext } from '../context/ToDoContext';

export default function TaskList() {
  const {tasks} = useContext(ToDoContext)
  return (
    <ul>
      {tasks
        .map(item=> {
          return(             
            <li key={item.id}><TaskItem name={item.name} checked={item.checked} id={item.id}/></li>
          )
        })         
      }
    </ul>
  )
}

