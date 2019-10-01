import React,{useContext} from 'react';
import TaskItemEdit from './TaskItemEdit';
import TaskItemContent from './TaskItemContent';
import { TaskItemContext } from '../context/TaskItemContext';

export default function TaskItem({ name, checked, id }) {
    const {editable} = useContext(TaskItemContext);
    return (
        <>
            {!editable
                && 
            <TaskItemContent 
                name={name}
                checked={checked}
                id={id}
                data-id={id}

            />}  
            {editable&&<TaskItemEdit name={name} dataId={id}/>} 
        </>
    );
}
