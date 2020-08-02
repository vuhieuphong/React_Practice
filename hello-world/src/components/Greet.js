import React from 'react'

// function Phong(){
//     return <h1>Hello Phong 1</h1>
// }

// const Greet=()=> <h1>Hello Phong 2</h1>

export const Greet=({name,heroName})=> 
{
    return( 
        <div>
            <h1>Hello {name} aka {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
}

// export default Greet