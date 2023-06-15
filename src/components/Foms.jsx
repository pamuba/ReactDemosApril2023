import React, { Component } from 'react'

export class Foms extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:'',
       summary:'',
       topic:''
    }
  }
  handleUsernameChange = (event) => {
    this.setState({
        username: event.target.value
    }, () => {console.log(this.state.username)})
  }
  handleSummary = (event) => {
    this.setState({
        summary: event.target.value
    }, () => {console.log(this.state.summary)})
  }
  handleTopic = (event) => {
    this.setState({
        topic: event.target.value
    }, () => {console.log(this.state.topic)})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    alert(`${this.state.username} ${this.state.summary} ${this.state.topic} `)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username</label><br></br>
        <input type="text" 
        value={this.state.username} 
        onChange={this.handleUsernameChange}/>
        <hr></hr>
        <label>Summary</label><br></br>
        <textarea
        value={this.state.summary} 
        onChange={this.handleSummary}></textarea>
        <hr></hr>
        <label>Topic</label><br></br>
        <select value={this.state.topic} 
        onChange={this.handleTopic}>
            <option value="">Select One</option>
            <option value="angular">Angular</option>
            <option value="react">React</option>
            <option value="vuejs">VueJS</option>
        </select>
        <br></br>
        <button type='submit'>SAVE</button>
      </form>
    )
  }
}

export default Foms

//get set
//Jimmy