import React, {useContext} from 'react';
import { DefaultButton } from 'office-ui-fabric-react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeButton = () => {
    const {setVisiblePanel} = useContext(ThemeContext)
    return (  
        <DefaultButton 
            text="Theme"  
            iconProps={{ iconName: 'Color' }}
            onClick={()=>{ setVisiblePanel(true) }}
        />

    );
}
 
export default ThemeButton;