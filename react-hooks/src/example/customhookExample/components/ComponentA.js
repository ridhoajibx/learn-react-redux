import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button, ButtonGroup } from 'reactstrap'
import useCounter from '../customHook/useCounter';

const ComponentA = () => {
    const [count, increment, decrement, reset] = useCounter(10)
    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    Component A Counter <Badge color="secondary">{count}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color='dark' onClick={increment}>Increment</Button>
                <Button color='dark' onClick={decrement}>Decrement</Button>
                <Button color='danger' onClick={reset}>Reset</Button>
            </ButtonGroup>
        </div>
    );
}

export default ComponentA;
