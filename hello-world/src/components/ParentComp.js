import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Phong'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Phong'
            })
        },2000)
    }
    

    render() {
        console.log('ParentComp render')
        return (
            <div>
                Parent Component
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
