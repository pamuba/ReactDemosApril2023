import React, { Component } from 'react'

export class Refs extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  componentDidMount() {
      console.log(this.inputRef)
      this.inputRef.current.focus()
      this.inputRef.current.value = "Hello"
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
      </div>
    )
  }
}

export default Refs