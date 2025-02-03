import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </>
  )
}

function Person() {
  const age = 30;
  const money = 15;
  const person = {name : 'Siyam', age : 22}
  return <h1>I am a {person.name}. I am {age + money} old</h1>
}
export default App
