import React, { useMemo, useState } from 'react';
import '../../App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const incrementA = () => {
        setCountA(countA+1)
    }
    const incrementB = () => {
        setCountB(countB+1)
    }
    
    const memoComponentA = useMemo(() => {
        return <ComponentA count={countA} />
    }, [countA])
    return (
        <div className="App">
            <h3>Count A : { countA }</h3>
            <h3>Count B : { countB }</h3>
            <p>
                <button onClick={ incrementA }>Counter A</button>
            </p>
            <p>
                <button onClick={ incrementB }>Counter B</button>
            </p>
            { memoComponentA }
            <p></p>
            <ComponentB count={countB} />
        </div>
    );
}

export default App;
