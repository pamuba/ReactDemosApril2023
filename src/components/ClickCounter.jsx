import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class ClickCounter extends Component {
 
  render() {
    const {count, incrementCount, name} = this.props
    return (
      <div>
        <button onClick={incrementCount}>{name} Clicked {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)