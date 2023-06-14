import React, { Component } from 'react'

export class Message extends Component {
constructor(props) {
    super(props)

    this.state = {
        message:'Welcome Visitor',
        name : "John"
    }
}
chnageMessage = () =>{
    // this.state.message = "new Message"
    this.setState({
        message : "How are you"
    })
}
  render() {
    return (
     <>
          <h1>Message: {this.state.message}  -- {this.state.name}</h1>
          <button onClick={this.chnageMessage}>CLICK</button>
     </>
    )
  }
}

export default Message

// form in a page