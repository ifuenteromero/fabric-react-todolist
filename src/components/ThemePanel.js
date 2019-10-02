import React, {useContext} from 'react';
import { Panel, SwatchColorPicker, formProperties } from 'office-ui-fabric-react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeColors from './ThemeColors';

const ThemePanel = () => {
    const {visiblePanel, setVisiblePanel} = useContext(ThemeContext);

    return (  
        <Panel
            isOpen={visiblePanel}
            closeButtonAriaLabel="Close"
            isLightDismiss={true}
            headerText="Choose your theme"
            onDismiss={()=>{setVisiblePanel(false)}}
            >
            <ThemeColors />
        </Panel>
    );
}
 
export default ThemePanel;