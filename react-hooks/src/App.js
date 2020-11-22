import React from 'react';
import ExampleMemo from './example/usememo/App';
import ExampleRef from './example/useref/App';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Example Memo</h1>
            <ExampleMemo />
            <h1>Example Ref</h1>
            <ExampleRef />
        </div>
    );
}

export default App;
