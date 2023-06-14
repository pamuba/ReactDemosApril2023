import React, { Component, PureComponent } from 'react'
import RegComponent from './RegComponent';
import PureComp from './PureComp';

export class PrentComponet extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'John'
    }
  }
  componentDidMount(){
    setInterval(() => {
        this.setState({
            name: 'John'
        })
    }, 2000);
  }
  render() {
    console.log("=================Parent Component================")
    return (
      <>
        <div>Prent Componet</div>
        <RegComponent name={this.state.name}></RegComponent>
        <PureComp name={this.state.name}></PureComp>
      </>
    )
  }
}

export default PrentComponet