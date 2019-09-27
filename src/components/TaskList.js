import React from 'react';
import TaskItem from './TaskItem';
import TaskItemEdit from './TaskItemEdit';


export default function TaskList() {
  return (
    <>
        <p>task list</p>   
        <TaskItem />
        <TaskItemEdit />
    </>
  );
}

