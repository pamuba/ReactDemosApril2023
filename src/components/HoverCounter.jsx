import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {
  render() {
    const {count, incrementCount, name} = this.props
    return (
      <h1 onMouseOver={incrementCount}>{name} Hovered {count} times</h1>
    )
  }
}

export default UpdatedComponent(HoverCounter)