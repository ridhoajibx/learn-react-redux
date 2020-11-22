import React, { useEffect, useReducer } from 'react';
import axios from 'axios'

import { Badge, ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const initialState = {
    loading: true,
    errors: "",
    todos: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                loading: false,
                errors: "",
                todos: action.payload
            }
        case "SET_ERRORS":
            return {
                loading: false,
                errors: "There are no data here",
                todos: []
            }
        default:
            return initialState;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log(res.data);
                dispatch({ type: 'SET_DATA', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'SET_ERRORS' })
            })
    }, []);

    const listMarkup = (
        <ListGroup>
            { state.todos.map((todo, i) => (
                <ListGroupItem key={todo.id}>{todo.title} {todo.completed ? (<Badge color="primary">Completed</Badge>) : (<Badge color="danger">UnCompleted</Badge>)}</ListGroupItem>
            ))}
        </ListGroup>
    )
    return (
        <div className="App">
            { state.loading ? 'Loading' : (state.errors ? state.errors : listMarkup)}
        </div>
    );
}

export default App;
