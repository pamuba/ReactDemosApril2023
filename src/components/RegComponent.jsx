import React, { Component } from 'react'

export class RegComponent extends Component {
  render() {
    console.log("=================Regular Component")
    return (
      <div>Regular Component {this.props.name}</div>
    )
  }
}

export default RegComponent