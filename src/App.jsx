import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const [count, setCount] = useState(0)

  const actors = ['khan', 'Spider-man', 'Super-man'];

  const singers = [
    {name: 'Alan', age : 32},
    {name: 'Walk', age : 24},
    {name: 'CarPinter', age : 45},
    {name: 'Billy', age : 62}
  ]

  const books = [
    {id: 1, name: 'Physics', price: 100},
    {id: 2, name: 'Math', price: 100},
    {id: 3, name: 'Bangla', price: 100},
    {id: 4, name: 'English', price: 100},
  ]

  return (
    <>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer => <Singer singer={singer} ></Singer>)
      }
      <h1>Vite + React</h1>
      <Actor name = {'Sakib Khan'}></Actor>
      {
        actors.map(actors => <Actor name={actors}></Actor>)
      }
      
      {/* <Device name= 'Laptop' price = '25000'></Device>
      <Device name= 'Mobile'></Device>
      <Device name= 'Computer'></Device>
      <Device name= 'Car'></Device>
      <Person></Person>
      <Student grad = '9th' point = '95'></Student>
      <Student grad = '6th' point = '99'></Student>
      <Student></Student>
      <Developer></Developer>
      <Todo task = 'Learn Js' isTrue = {true}></Todo>
      <Todo task = 'Core Concept' isTrue = {false}></Todo>
      <Todo task = 'Learn React' isTrue = {true}></Todo> */}
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

function Student({grad = 0, point = 0}) {
  return (
    <div className='students'>
      <h3>This is a Student</h3>
      <p>Name:</p>
      <p>Grad: {grad}</p>
      <p>Point: {point}</p>
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