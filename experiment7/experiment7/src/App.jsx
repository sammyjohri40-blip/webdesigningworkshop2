import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

function Student({ name, course, marks }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>
    </div>
  )
}

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Student Information</h1>

      <Student name="niharika"  course="Computer Science"       marks={85} />
      <Student name="sakshi singh"   course="Information Technology" marks={92} />
      <Student name="shagun"   course="Electronics"            marks={78} />
      <p>Name: SAMRIDDHI JOHRI<br />Branch: CSE 26 <br /> Roll No.: 2503201000861 </p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)