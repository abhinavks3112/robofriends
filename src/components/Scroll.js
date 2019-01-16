import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'hidden', border:'3px solid black', height:'750px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;