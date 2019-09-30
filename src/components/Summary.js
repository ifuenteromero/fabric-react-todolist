import React, {useContext} from 'react';
import { Stack, DefaultButton } from 'office-ui-fabric-react/';
import { ToDoContext } from '../context/ToDoContext';


export default function Summary() {
    const {tasks, setTasks} = useContext(ToDoContext);
    const leftTasks = tasks.filter(item => item.checked===false)
    const handleClear = () => {
        const newTasks = tasks.filter(item => item.checked===false);
        setTasks(newTasks);
    }
    return (
        <Stack horizontal horizontalAlign="start" verticalAlign="center" tokens={{childrenGap:'2%'} }>
            <p>{leftTasks.length} items left</p>   
            <DefaultButton text="Clear Completed" onClick={handleClear} />
        </Stack>
    );
}

