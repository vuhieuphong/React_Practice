import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log('RegComp render')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComp
