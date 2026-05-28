import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentInfo from './info/StudentInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ textAlign: "center"}}>
    <h1>Student Information</h1>
    <StudentInfo  name={'Name: Rahul Sharma'} course={'Course: Computer Science'} marks={'Marks: 85'}/>
    <StudentInfo name={'Name: Anita Verma'} course={'Course: Information Technology'} marks={'Marks: 92'}/>
    <StudentInfo name={'Name: Rohan Gupta'} course={'Course: Electronics'} marks={'Marks: 78'}/>
    </div>
    </>
  )
}

export default App
