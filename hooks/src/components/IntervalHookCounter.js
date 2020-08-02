import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {
    const [count,setCount]=useState(0)
    const [someProp,setSomeProp]=useState(1 + Math.random() * (100 - 1))

    const tick=()=>{
        // setCount(count+1)
        setCount(prevCount=>prevCount+1)
        setSomeProp(1 + Math.random() * (100 - 1))
    }

    useEffect(    
        ()=>{
            function doSomething(){
                console.log(someProp)
            }
            doSomething()
            const interval=setInterval(tick,1000)
            return ()=>{
                clearInterval(interval)
            }
        },//[count]
    [someProp]
    )

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
