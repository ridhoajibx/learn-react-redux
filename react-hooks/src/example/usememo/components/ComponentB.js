import React, { useEffect } from 'react';

let renderCount = 0
const ComponentB = (props) => {
    useEffect(() => {
        return renderCount++   
    })
    return (
        <div>
            <h3>Render B : {renderCount} || Count B : { props.count }</h3>
        </div>
    );
}

export default ComponentB;
