import React, {useContext} from 'react';
import { Panel, SwatchColorPicker, formProperties } from 'office-ui-fabric-react';
import { ThemeContext } from '../context/ThemeContext';
import { colorThemeCells } from '../utils/themePalettes';

const ThemePanel = () => {
    const {visiblePanel, setVisiblePanel,theme, setTheme} = useContext(ThemeContext);

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
                colorCells={colorThemeCells}
                onColorChanged={(id, color) => setTheme(id)}
        />
        </Panel>
    );
}
 
export default ThemePanel;