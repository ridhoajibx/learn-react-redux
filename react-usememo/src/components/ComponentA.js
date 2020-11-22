import React, { useEffect } from 'react';

let renderCount = 0
const ComponentA = (props) => {
    useEffect(() => {
        return renderCount++   
    })
    return (
        <div>
            <h3>Render A : {renderCount} || Count A : { props.count }</h3>
        </div>
    );
}

export default ComponentA;
