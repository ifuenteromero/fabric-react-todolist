import React,{useContext} from 'react';
import { colorThemeCells } from '../utils/themePalettes';
import { SwatchColorPicker } from 'office-ui-fabric-react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeColors = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return ( 
        <SwatchColorPicker
                columnCount={1}
                cellHeight={35}
                cellWidth={35}
                selectedId={theme}
                cellShape={'square'}
                colorCells={colorThemeCells}
                onColorChanged={(id, color) => setTheme(id)}
        />
     );
}
 
export default ThemeColors;