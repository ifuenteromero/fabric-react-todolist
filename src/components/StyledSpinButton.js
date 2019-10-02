import * as React from 'react';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';

const styles = {
  root: {
    width: '400px'
  }
};

const upArrowButtonStyles = {
    rootChecked: {
        backgroundColor: 'green'
    },
    rootPressed: {
        backgroundColor: 'green'
     },
    root:{
        width:'200px'
    },
    rootHovered: {
        backgroundColor: 'black'
    }
};

const cafe = {
  rootChecked: {
    backgroundColor: 'red'
  },
  rootPressed: {
    backgroundColor: 'red'
  }
};


const StyledSpinButton = () => {
    return (
        <div>
          <SpinButton
            styles={styles}
            upArrowButtonStyles={upArrowButtonStyles}
            downArrowButtonStyles={cafe}
            defaultValue="0"
            label={'Custom styled SpinButton:'}
            min={0}
            max={100}
            step={1}
            incrementButtonAriaLabel={'Increase value by 1'}
            decrementButtonAriaLabel={'Decrease value by 1'}
          />
        </div>
      );
}
 
export default StyledSpinButton;
