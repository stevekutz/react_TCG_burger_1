import React from 'react';
import Aux from '../../hoc/Aux';


const layout = (props) => (
    <Aux>
        <div> Toolbar, SideDrawer, Backdrops</div>
        <main>
            {props.children}
        </main>
    </Aux>

)

export default layout;