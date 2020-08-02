import React from 'react'

function Person({person,keyProp}) {
    return (
        <div>
            <h2>{keyProp}. I am {person.name}, {person.age} years old, I know {person.skill}</h2>
        </div>
    )
}

export default Person
