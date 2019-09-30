import React, {useContext} from 'react';
import { Pivot,PivotItem } from 'office-ui-fabric-react/';
import {ToDoContext} from '../context/ToDoContext'
import TaskList from './TaskList';

export default function FilterList() {
    const {tasks,setFilter} = useContext(ToDoContext);
    const handleFilter = ({props}) => {
        const {headerText : newFilter} = props;
        setFilter(newFilter);
    }
    return (
        <Pivot onLinkClick={handleFilter}  >
            <PivotItem headerText="all" itemIcon="AllApps" itemCount={tasks.length}></PivotItem>
            <PivotItem headerText="active" itemIcon="Recent" itemCount={tasks.filter(item => item.checked===false).length} ></PivotItem>
            <PivotItem headerText="completed" itemIcon="Completed" itemCount={tasks.filter(item => item.checked===true).length} ></PivotItem>
        </Pivot>
    );
}
