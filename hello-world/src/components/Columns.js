import React from 'react'

function Columns() {
    const items=[{id:1,title:'Hello World'},{id:2,title:'Goodbye World'}]
    return (
        <React.Fragment>
            {
                items.map(item=>(
                <React.Fragment key={item.id}>
                    <td>Title</td>
                    <td>{item.title}</td>
                </React.Fragment>
                ))
            }
        </React.Fragment>

        // <>
        //     <td>Name</td>
        //     <td>Phong</td>
        // </>
    )
}

export default Columns
