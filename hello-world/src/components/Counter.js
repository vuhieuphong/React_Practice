import React, { Component } from 'react'

class Counter extends Component {
constructor(props) {
    super(props)

    this.state = {
         count:0
    }
}

    increment(){
        // this.setState(
        // {
        //     count:this.state.count+1
        // }, 
        // ()=>{
        //     console.log('Callback value',this.state.count)
        //     }
        // )

        // // state runs asynchronously so this console.log will run earlier than the state
        // console.log(this.state.count);

        // when u want to update based on previous state, pass a argument
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
       
    }

    incrementFive(){
        //if increment is old code, all 5 calls will be performed once => wrong
        this.increment()
        this.increment()
        this.increment()
        this.increment() 
        this.increment()
    }


    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
