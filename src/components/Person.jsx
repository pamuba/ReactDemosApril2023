import React from 'react'

function Person(props) {
  return (
        <h3>ID:{props.person.id} NAME:{props.person.name}</h3>
  )
}

export default Person