import React, {useContext} from 'react';
import { Stack, TextField, DefaultButton } from 'office-ui-fabric-react/';
import { ToDoContext } from '../context/ToDoContext';

export default function TaskItemEdit({name,dataId}) {
    const {tasks, setTasks} = useContext(ToDoContext)

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
        const idSelected = parseInt(event.currentTarget.getAttribute('data-id'));
        const indexSelected = tasks.findIndex(item=>item.id===idSelected);
        const selected = tasks[indexSelected];
        const newState = [...tasks];
        const newSelected = {...selected, editable: !selected.editable}
        newState[indexSelected] = newSelected;
        setTasks(newState);
    }
    
    return (
        <Stack horizontal horizontalAlign="space-between">
            <TextField value={name} onChange={handleChange} data-id={dataId} />
            <DefaultButton text="Save" onClick={handleSave} data-id={dataId}/>
        </Stack>
    );
}
