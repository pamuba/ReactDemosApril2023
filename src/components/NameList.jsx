import React, { Component } from 'react'
import Person from './Person'

export class NameList extends Component {

  render() {
  const persons = [
    {
        id:1,
        name:"John"
    },
    {
        id:2,
        name:"Jill"
    },
    {
        id:3,
        name:"Jack"
    }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            {personList}
        </div>
    //   <div>
    //     {
    //         names.map(name=><div key={name}>{name}</div>)
    //     }
    //   </div>
    )
  }
}

export default NameList