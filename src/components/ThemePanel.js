import React, {useContext} from 'react';
import { Panel, SwatchColorPicker } from 'office-ui-fabric-react';
import { ThemeContext } from '../context/ThemeContext';

const ThemePanel = () => {
    const {visiblePanel, setVisiblePanel,theme, setTheme} = useContext(ThemeContext);

    const colorCellsExample1 = [
        { id: 'green', label: 'green', color: '#00783e' },
        { id: 'dark', label: 'dark', color: '#323130' },
      ];

    return (  
        <Panel
            isOpen={visiblePanel}
            closeButtonAriaLabel="Close"
            isLightDismiss={true}
            headerText="Choose your theme"
            onDismiss={()=>{setVisiblePanel(false)}}
            >
            <SwatchColorPicker
                columnCount={1}
                cellHeight={35}
                cellWidth={35}
                selectedId={theme}
                cellShape={'square'}
                colorCells={colorCellsExample1}
                onColorChanged={(id, color) => setTheme(id)}
        />
        </Panel>
    );
}
 
export default ThemePanel;