import React from 'react'

function Count({count,text}) {
    return (
        <div>
            {text} : {count}
        </div>
    )
}

export default React.memo(Count)
