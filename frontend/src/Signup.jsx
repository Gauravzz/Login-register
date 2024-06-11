import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
      const [firstname, setFirstName] = useState()
      const [middlename, setMiddleName] = useState()
      const [lastname, setLastName] = useState()
      const [email, setEmail] = useState()
      const [number, setNumber] = useState()
      const [password, setPassword] = useState()
      const [gender, setGender] = useState()
      const [picture, setPicture] = useState()

      const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/register', {firstname, middlename, lastname, email, password, number, gender, picture})
    .then(result => {console.log(result)
          navigate('/login')
    })
    .catch(err => console.log(err))
}

  return (
    <>
     <div>
            <div>
                <h3>Registration</h3>
            </div>
        </div>
    <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="form-body">
              <div>
                  <label>First Name </label>
                  <input type="text" name="firstname" id="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div>
                  <label>Middle Name </label>
                  <input  type="text" name="middlename" id="middlename" placeholder="Middle name" onChange={(e) => setMiddleName(e.target.value)}/>
              </div>
              <div>
                  <label>Last Name </label>
                  <input  type="text" name="lastName" id="lastName" placeholder="LastName" onChange={(e) => setLastName(e.target.value)}/>
              </div>
              <div>
                  <label>Number</label>
                  <input type="number" id="number" name='number' placeholder="Number" onChange={(e) => setNumber(e.target.value)}/>
              </div>
              <div>
                  <label>Email </label>
                  <input  type="email" id="email" placeholder="Email" name='email' onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div>
                  <label>Password </label>
                  <input type="password" name='password' id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div>
                  <label>male</label>
                  <input type="radio" name='gender'  value={"male"} id="gender" onChange={(e) => setGender(e.target.value)}/>
                  <label>female</label>
                  <input type="radio" name='gender' value={"female"} id="gender" onChange={(e) => setGender(e.target.value)}/>
              </div>
              <div>
                  <label>Picture</label>
                  <input type="pic" id="pic" name='pic' placeholder="Upload" onChange={(e) => setPicture(e.target.value)}/>
              </div>
              
          </div>
          <div class="footer">
              <input type='submit' value="Register"/> <br></br>
              <label>Already Registered</label>
              <Link to='/login'>Login</Link>
          </div>
      </div>      
      </form>

    </>
  )
}

export default Signup