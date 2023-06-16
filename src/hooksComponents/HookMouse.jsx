import React, {useState, useEffect} from 'react'

function HookMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse Event')
    setX(e.clientX)
    setY(e.clientY)
  }

  //commponentDidMount
  useEffect(()=>{
    window.addEventListener('mousemove', logMousePosition)

    //componentWillUnmount
    return ()=>{
        console.log('ComponentWillUnmount')
        window.removeEventListener('mousemove', logMousePosition)
    }
  },[])


  return (
    <div>
        X - {x}  Y - {y}
    </div>
  )
}

export default HookMouse