import React from 'react';
import './App.css';
import ComponentA from './example/customhookExample/components/ComponentA';
import ComponentB from './example/customhookExample/components/ComponentB';

function App() {
    return (
        <div className="App">
            <p></p>
            <ComponentA />
            <p></p>
            <ComponentB />
        </div>
    );
}

export default App;
