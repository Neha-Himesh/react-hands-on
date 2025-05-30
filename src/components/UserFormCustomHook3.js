import React, {useState} from 'react'
import useInput from './Hooks/useInput'

function UserFormCustomHook3() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First name:</label>
                <input type="text" {...bindFirstName}></input>
            </div>
            <div>
                <label>Last name:</label>
                <input type="text" {...bindLastName}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UserFormCustomHook3