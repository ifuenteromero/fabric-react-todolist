import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoApp from './ToDoApp';
import {ToDoProvider} from './context/ToDoContext'
import { initializeIcons } from '@uifabric/icons';
import Layout from './components/Layout';
import StyledSpinButton from  './components/StyledSpinButton';
initializeIcons();

ReactDOM.render(
    <ToDoProvider>
        <ToDoApp />
    </ToDoProvider>
, document.getElementById('root'));

// ReactDOM.render(
//    <Layout />
// , document.getElementById('root'));