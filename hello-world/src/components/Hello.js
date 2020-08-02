import React from 'react'

const Hello=()=> {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Feng</h1>
    //     </div>
    // )

    return React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h2',null,'Halleloo Feng'))
}

export default Hello