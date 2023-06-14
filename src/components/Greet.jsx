import React from 'react'

// function Greet() {
//   return (
//        <>
//          <h1>Greet</h1>
//          <h1>FROM JOHN</h1>
//         </>
       
//   )
// }

//JSX

// function Greet(props) { 
//   props.aka = "hello"
//   return(<h1>Hello {props.heroName} aka {props.aka}</h1>)
// }


const Greet = (props) => { 
  // props.aka = "hello"
  return(
    <>
       <h1>Hello {props.heroName} aka {props.aka}</h1>
       {props.children}
    </>
  )
}

// function Greet(){
//     return React.createElement('div', null, 
//     React.createElement("h1", null, "Hello JSX"))
// }
export default Greet