import React, {useContext} from 'react';
import { Pivot,PivotItem } from 'office-ui-fabric-react/';
import {ToDoContext} from '../context/ToDoContext'

export default function FilterList() {
    const {tasks,setFilter} = useContext(ToDoContext);
    const handleFilter = ({props}) => {
        const {headerText : newFilter} = props;
        setFilter(newFilter);
    }
    const numberTasks = tasks.length;
    const numberActive = tasks.filter(item => item.checked===false).length;
    const numberCompleted = numberTasks - numberActive;
    return (
        <Pivot onLinkClick={handleFilter}  >
            <PivotItem headerText="all" itemIcon="AllApps" itemCount={numberTasks}></PivotItem>
            <PivotItem headerText="active" itemIcon="Recent" itemCount={numberActive} ></PivotItem>
            <PivotItem headerText="completed" itemIcon="Completed" itemCount={numberCompleted} ></PivotItem>
        </Pivot>
    );
}
