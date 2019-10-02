import React from 'react';
//dir lrt left to right
//dir right to left
const Layout = () => {
    return ( 
        <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg8">A</div>
                <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg4">B</div>
            </div>
            <div className="ms-Grid-row">
                 <div className="ms-Grid-col ms-sm12 ms-lg4">Example</div>
            </div>
        </div>
     );
}
 
export default Layout;