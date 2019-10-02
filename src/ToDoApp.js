import React, {useContext, useEffect} from 'react';
import './App.css';
import AdderTask from './components/AdderTask';
import FilterList from './components/FilterList';
import TaskList from './components/TaskList';
import Summary from './components/Summary';
import { loadTheme } from 'office-ui-fabric-react';
import { ThemeProvider } from './context/ThemeContext';
import {ToDoContext} from './context/ToDoContext'
import { themeGreen, themeDark } from './utils/themePalettes';

export default function ToDoApp() {
    const {theme} = useContext(ToDoContext);
    
    useEffect(
        ()=>{
            const color = theme === 'green' ? themeGreen : themeDark
            loadTheme(color)
        }
    ,[theme]);
        
        return (
            <div>
            <h1>
            ToDos
            </h1>
            <ThemeProvider/>
            <AdderTask />
            <FilterList />
            <TaskList />
            <Summary />
        </div>
    );
}
