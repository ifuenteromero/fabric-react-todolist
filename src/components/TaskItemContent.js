import React, {useContext} from 'react';
import { Stack, Checkbox, IconButton } from 'office-ui-fabric-react/';
import { ToDoContext } from '../context/ToDoContext';
import { TaskItemContext } from '../context/TaskItemContext';

const TaskItemContent = ({ name, checked, id, editable }) => {
    const {tasks, setTasks} = useContext(ToDoContext);
    const {setEditable} = useContext(TaskItemContext);

    const handleCheck = (event) =>{
        const idSelected = parseInt(event.target.id);
        const index = tasks.findIndex(item => 
          item.id === idSelected
        );
        const objectSelected = tasks[index];
        const newCheck = !objectSelected.checked;
        objectSelected.checked = newCheck
        tasks[index] = objectSelected
        const newTasks = [...tasks];
        setTasks(newTasks)
    }
    
    const handleDelete = (event) => {
        const idSelected = parseInt(event.currentTarget.getAttribute('data-id'))
        const newState = tasks.filter(item =>
        item.id !== idSelected
        )
        setTasks(newState)
    }

    const handleEdit = (event) => {
        setEditable(true);
    }

    return ( 
        <Stack horizontal horizontalAlign="space-between" verticalAlign="center" >
            <Checkbox label={name} onChange={handleCheck} checked={ checked } id={id}/>
            <Stack horizontal>
                <IconButton iconProps={{ iconName: 'Edit' }} onClick = {handleEdit} ariaLabel="Edit" data-id={id}/>
                <IconButton iconProps={{ iconName: 'Delete' }} onClick={handleDelete} ariaLabel="Delete" data-id={id}/>
            </Stack>
        </Stack>
    );

}
 
export default TaskItemContent;