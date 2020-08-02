import React,{useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display,setDisplay]=useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle display</button>
            {/* means if display set to true then render HookMouse component */}
            {display && <HookMouse></HookMouse>}
        </div>
    )
}

export default MouseContainer
