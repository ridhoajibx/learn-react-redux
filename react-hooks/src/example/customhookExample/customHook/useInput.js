import { useState } from 'react';

const useInput = (initialState) => {
    const [value, setvalue] = useState(initialState)
    const clearText = () => {
        setvalue(initialState)
    }
    const bindForm = {
        value,  // value : value
        onChange: e => {
            setvalue(e.target.value)
        }
    }
    return [ value, bindForm, clearText ]
}

export default useInput;