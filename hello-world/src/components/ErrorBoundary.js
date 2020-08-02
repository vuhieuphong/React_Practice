import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    

    static getDerivedStateFromError(error){
        //not use set state here cause static
        return{
            hasError:true
        }
    }

    componentDidCatch(error,info){
        //error is logged automatically to console log so this is redundant
        console.log(error)
        console.log(info)
    }

    render() {
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary
