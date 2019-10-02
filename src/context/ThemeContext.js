import React, {createContext, useState, useContext} from 'react';
import ThemeButton from '../components/ThemeButton';
import ThemePanel from '../components/ThemePanel';
import {ToDoContext} from './ToDoContext'

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [visiblePanel, setVisiblePanel] = useState(false);
    const {theme, setTheme} = useContext(ToDoContext);

    return (
        <ThemeContext.Provider value={{visiblePanel, setVisiblePanel, setTheme, theme}}>
            <ThemeButton />
            <ThemePanel />
        </ThemeContext.Provider>
    )
}