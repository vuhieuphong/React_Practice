import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Phong'
        }
        console.log('LifeCycleA constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState=()=>{
        this.setState({
            name:'Vu'
        })
    }

    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
