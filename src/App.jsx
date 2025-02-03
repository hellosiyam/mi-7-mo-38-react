import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Device name= 'Laptop' price = '25000'></Device>
      <Device name= 'Mobile'></Device>
      <Device name= 'Computer'></Device>
      <Device name= 'Car'></Device>
      <Person></Person>
      <Student grad = '9th' point = '95'></Student>
      <Developer></Developer>
    </>
  )
}

function Device(props) {
  return <h2>This Device : {props.name} price: {props.price}</h2>
}

function Person() {
  const age = 30;
  const money = 15;
  const person = {name : 'Siyam', age : 22}
  return <h1>I am a {person.name}. I am {age + money} old</h1>
}

function Student(props) {
  return (
    <div className='students'>
      <h3>This is a Student</h3>
      <p>Name:</p>
      <p>Grad: {props.grad}</p>
      <p>Point: {props.point}</p>
    </div>
  )
}

function Developer() {
  const devStyle = {
    margin : '20px',
    padding : '10px',
    border : '2px solid green',
    borderRadius : '16px',
  }
  return(
    <div style={devStyle}>
      <h1>Dev:</h1>
      <p>Coding:</p>
    </div>
  )
}
export default App
