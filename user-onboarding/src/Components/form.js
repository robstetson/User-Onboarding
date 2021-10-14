import React from 'react'

function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props
    
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }
    
    const onChange = event => {
        const { name, value, checked, type } = event.target
        const usedValues = type === 'checkbox' ? checked : value;
        change(name, usedValues);
    }

    return (
        <form className="container" onSubmit={onSubmit}>
        <div className="user-onboard submit">
            <h2>Welcome aboard, {values.name}</h2>
        </div>

            <label>Name
                <input 
                    value={values.name}
                    onChange={onChange}
                    name="name"
                    type="text"
                />
            </label>

            <label>Email
                <input 
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    type="text"
                />
            </label>

            <label>Password
                <input 
                    value={values.password}
                    onChange={onChange}
                    name="password"
                    type="password"
                />
            </label>


            <label> <a href="/">Terms Of Service</a>
                <input 
                    type="checkbox"
                    name="terms"
                    onChange={onChange}
                    checked={values.terms}
                />
            </label>

            <button disabled={disabled}>submit</button>

            <div className='errors'>

                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
        </form>
    )
}
export default Form;

