import React, { useRef } from 'react'

function App() {
    const inputRef = useRef();
    return (
        <div>
            <input ref={inputRef} type="text" />
            <input type="text" />
            <input type="text" />
            <button onClick={ () => inputRef.current.focus() }>Focus</button>
        </div>
    )
}

export default App
