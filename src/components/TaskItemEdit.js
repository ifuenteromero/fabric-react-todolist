import React, {useContext} from 'react';
import { Stack, TextField, DefaultButton } from 'office-ui-fabric-react/';
import { ToDoContext } from '../context/ToDoContext';
import { TaskItemContext } from '../context/TaskItemContext';

export default function TaskItemEdit({name,dataId}) {
    const {tasks, setTasks} = useContext(ToDoContext)
    const  {setEditable} = useContext(TaskItemContext);

    const handleChange = ({target}) => {
        const idSelected = parseInt(target.getAttribute('data-id'));
        const indexSelected = tasks.findIndex(item=>item.id===idSelected);
        const selected = tasks[indexSelected];
        const newState = [...tasks];
        const newSelected = {...selected, name: target.value}
        newState[indexSelected] = newSelected;
        setTasks(newState);
    }

    const handleSave = (event) => {
        setEditable(false)
    }
    
    return (
        <Stack horizontal horizontalAlign="space-between">
            <TextField 
                value={name} 
                onChange={handleChange} 
                data-id={dataId} 
                onKeyPress={(e) => { 
                    e.key==='Enter' && handleSave(e);
                    }
                }
                />
            <DefaultButton 
                text="Save" 
                onClick={handleSave} 
                data-id={dataId}/>
        </Stack>
    );
}
