import React from 'react';
import useInput from '../customHook/useinput';

const Form = () => {
    const [name, bindName, clearName] = useInput('')
    const [email, bindEmail, clearEmail] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault(e)
        alert(
            `this is name ${name} and this is email ${email}`
        )
        clearName('')
        clearEmail('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    <label htmlFor="name">Name</label>
                    <input
                        {...bindName}
                        type="text"
                    />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input
                        {...bindEmail}
                        type="text"
                    />
                </p>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;
