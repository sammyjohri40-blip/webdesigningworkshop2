import React, { useState, useEffect } from "react"; 
import "./App.css"; 
 
function App() { 
 
  // Form States 
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
 
  // Error State 
  const [errors, setErrors] = useState({}); 
 
  // API Data State 
  const [users, setUsers] = useState([]); 
 
  // Fetch API Data 
  useEffect(() => { 
 
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then((response) => response.json()) 
      .then((data) => { 
        setUsers(data); 
      }) 
      .catch((error) => { 
        console.log(error); 
      }); 
 
  }, []); 
 
  // Validation Function 
  const validateForm = () => { 
 
    let formErrors = {}; 
 
    if (name.trim() === "") { 
      formErrors.name = "Name is required"; 
    } 
 
    if (email.trim() === "") { 
      formErrors.email = "Email is required"; 
    } 
    else if (!email.includes("@")) { 
      formErrors.email = "Enter valid email"; 
    } 
 
    if (password.trim() === "") { 
      formErrors.password = "Password is required"; 
    } 
    else if (password.length < 6) { 
      formErrors.password = "Password must be at least 6 characters"; 
    } 
 
    setErrors(formErrors); 
 
    return Object.keys(formErrors).length === 0; 
  }; 
 
  // Form Submit 
  const handleSubmit = (e) => { 
 
    e.preventDefault(); 
 
    if (validateForm()) { 
 
      alert("Form Submitted Successfully"); 
 
      setName(""); 
      setEmail(""); 
      setPassword(""); 
      setErrors({}); 
    } 
  }; 
 
  return ( 
 
    <div className="container"> 
 
      <h1 className="title"> 
        Experiment 9 - React useEffect API Fetching 
      </h1> 
 
      {/* Form Section */} 
      <div className="form-container"> 
 
        <h2>Registration Form</h2> 
 
        <form onSubmit={handleSubmit}> 
 
          {/* Name */} 
          <div className="input-group"> 
 
            <label>Name</label> 
 
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name" 
            /> 
 
            <p className="error">{errors.name}</p> 
 
          </div> 
 
          {/* Email */} 
          <div className="input-group"> 
 
            <label>Email</label> 
 
            <input 
              type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
            /> 
 
            <p className="error">{errors.email}</p> 
 
          </div> 
 
          {/* Password */} 
          <div className="input-group"> 
 
            <label>Password</label> 
 
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter password" 
            /> 
 
            <p className="error">{errors.password}</p> 
 
          </div> 
 
          <button className="btn" type="submit"> 
            Submit 
          </button> 
 
        </form> 
 
      </div> 
 
      {/* API Data */} 
      <div> 
 
        <h2>Fetched API Data</h2> 
 
        { 
          users.map((user) => ( 
 
            <div className="user-card" key={user.id}> 
 
              <h3>{user.name}</h3> 
 
              <p>Email: {user.email}</p> 
 
              <p>Website: {user.website}</p> 
 
            </div> 
 
          )) 
        } 
 
      </div> 
 
    </div> 
  ); 
} 
 
export default App;