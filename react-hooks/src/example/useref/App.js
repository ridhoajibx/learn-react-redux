import React, { useRef, useState } from 'react'
import Components from './Components/Components';

function App() {
    const [show, setShow] = useState(true)
    const inputRef = useRef();
    return (
        <div>
            <h3>Example focus field</h3>
            <input ref={inputRef} type="text" />
            <input type="text" />
            <input type="text" />
            <button onClick={ () => inputRef.current.focus() }>Focus</button>
            <p></p>
            <button onClick={ () => setShow(!show) }>Toggle components</button>
            <h3>Unmount Component</h3>
            { show && <Components /> }
        </div>
    )
}

export default App
