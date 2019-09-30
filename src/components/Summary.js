import React, {useContext} from 'react';
import { Stack, DefaultButton } from 'office-ui-fabric-react/';
import { ToDoContext } from '../context/ToDoContext';


export default function Summary() {
    const {tasks} = useContext(ToDoContext);
    const handleClear = () => {
        console.log('clear')
    }
    return (
        <Stack horizontal horizontalAlign="start" verticalAlign="center" tokens={{childrenGap:'2%'} }>
            <p>{tasks.length} items left</p>   
            <DefaultButton text="Clear Completed" onClick={handleClear} />
        </Stack>
    );
}

