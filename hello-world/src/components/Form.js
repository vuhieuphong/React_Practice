import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'react'
        }
    }

    handleUsernameChange=(event)=> {
        this.setState({
            username:event.target.value
        })
    } 

    handleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }

    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit=(event)=>{
        alert(`${this.state.username}\n${this.state.comments}\n${this.state.topic}`)
        event.preventDefault() //prevent refreshing page
    }

    
    render() {
        const {username,comments,topic}=this.state  //pass state to const so dont have to repeat this.state.
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username:</label><br/>
                <input type='text' value={username} onChange={this.handleUsernameChange}></input>
            </div>

            <div>
                <label>Comments:</label><br/>
                <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
            </div>

            <div>
                <label>Topic:</label><br/>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                </select>
            </div>

            <button type='submit'>Submit</button>

            </form>
        )
    }
}

export default Form
