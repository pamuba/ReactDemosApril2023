import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }
  increment(){
    this.setState(prevState => ({
      count : prevState.count + 1
    }), ()=> console.log(this.state.count))
       
  }
  incrementFive(){
    this.increment()//0
    this.increment()//1
    this.increment()//2
    this.increment()//3
    this.increment()//4
  }
  render() {
    return (
      <div>
        Count - {this.state.count}<hr></hr>
        <button onClick={()=> this.increment()}>Increment</button>
        <button onClick={()=> this.incrementFive()}>IncrementFive</button>
      </div>
    )
  }
}

export default Counter