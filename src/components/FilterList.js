import React, {useContext} from 'react';
import { Pivot,PivotItem } from 'office-ui-fabric-react/';
import {ToDoContext} from '../context/ToDoContext'

export default function FilterList() {
    const {tasks,setFilter,setFilteredTasks} = useContext(ToDoContext);
    const handleFilter = ({props}) => {
        const {headerText : newFilter} = props;
        setFilter(newFilter);
    }
    return (
        <Pivot onLinkClick={handleFilter}  >
            <PivotItem headerText="all" itemIcon="AllApps" ></PivotItem>
           
            <PivotItem headerText="active" itemIcon="Recent">
            </PivotItem>
            <PivotItem headerText="completed" itemIcon="Completed" >
            </PivotItem>
         </Pivot>
  );
}
