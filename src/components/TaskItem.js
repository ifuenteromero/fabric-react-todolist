import React, { useContext } from 'react';
import { Stack, Checkbox, IconButton } from 'office-ui-fabric-react/';
import { ToDoContext } from '../context/ToDoContext';

export default function TaskItem({ name, checked, id }) {
  const {tasks, setTasks} = useContext(ToDoContext)
  
  const handleCheck = (event) =>{
    const selectedId = parseInt(event.target.id);
    const index = tasks.findIndex(item => 
      item.id === selectedId
    );
    const objectSelected = tasks[index];
    const newCheck = !objectSelected.checked;
    objectSelected.checked = newCheck
    tasks[index] = objectSelected
    const newTasks = [...tasks];
    setTasks(newTasks)
    console.log(newTasks)
  }

  const handleDelete = (event) => {
    const selectedId = parseInt(event.currentTarget.getAttribute('data-id'))
    const newState = tasks.filter(item =>
      item.id !== selectedId
      )
    setTasks(newState)
  }

  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Checkbox label={name} onChange={handleCheck} checked={ checked } id={id}/>
      <Stack horizontal>
        <IconButton iconProps={{ iconName: 'Edit' }} onClick = {() => console.log('Edit')} ariaLabel="Edit" />
        <IconButton iconProps={{ iconName: 'Delete' }} onClick={handleDelete} ariaLabel="Delete" data-id={id}/>
      </Stack>
    </Stack>
  );
}
