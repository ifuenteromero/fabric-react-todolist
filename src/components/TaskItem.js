import React, { useContext } from 'react';
import { Stack, Checkbox, IconButton } from 'office-ui-fabric-react/';
import { ToDoContext } from '../context/ToDoContext';
import TaskItemEdit from './TaskItemEdit';
import TaskItemContent from './TaskItemContent';

export default function TaskItem({ name, checked, id, editable }) {
  
  return (
    <>
        {!editable
            && 
        <TaskItemContent 
            name={name}
            checked={checked}
            id={id}
            editable={editable}
        />}  
        {editable&&<TaskItemEdit name={name} dataId={id}/>} 
    </>
  );
}
