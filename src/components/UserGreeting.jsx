import React, { Component } from 'react'

export class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false,
    }
  }
  render() {
    let message
    if(this.state.isLoggedIn){
       message =  <h1>Welcome U have Logged In</h1>
    }
    else{
        message =  <h1>Welcome U have not Logged In</h1>
    }
    return <h3>{message}</h3>
}
}

export default UserGreeting