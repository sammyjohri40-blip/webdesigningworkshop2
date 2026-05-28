import React from 'react'

function StudentInfo({name,course,marks}) {
  return (
    <div className='card'>
      <h1>{name}</h1>
      <br/>
      <h3>{course}</h3>
      <br/>
      <h3>{marks}</h3>
      <br/>
    </div>
  )
}

export default StudentInfo