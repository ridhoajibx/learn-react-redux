import React, { useEffect, useRef, useState } from 'react';

const Components = () => {
    const [count, setCount] = useState(0)
    const componentRef = useRef(true)
    useEffect(() => {
        return() => {
            componentRef.current = false
        }
    }, [])

    const fakeFetch = () => {
        console.log('fetch executed');
        setTimeout(() => {
            if (componentRef.current)
            setCount(count+1)
        }, 2000);
    }

    return (
        <div>
            <h3>Components count {count}</h3>
            <button onClick={fakeFetch}>Fake fecth</button>
        </div>
    );
}

export default Components;
