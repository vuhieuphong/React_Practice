import React,{useState} from 'react'
import useInput from './useInput'

function UserForm() {
    const [firstName,bindFirstName,resetFirstName]=useInput('')
    const [lastName,bindLastName,resetLastName]=useInput('')

    const submitHandler=e=>{
        e.preventDefault()
        alert( `Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (

        <form onSubmit={submitHandler}>
            <div>
            <label>First Name: </label>
            <input {...bindFirstName} type="text"></input>
            <label>Last Name: </label>
            <input {...bindLastName} type="text"></input>
            <button>Submit</button>
            <h2>{firstName} {lastName}</h2>
            </div>
        </form>
    )
}

export default UserForm
