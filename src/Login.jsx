import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'

export default function Login() {
  const [name, setName] = useState("")
  const [salary, setSalary] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [specialization, setSpecialization] = useState("")
  function handleSubmit() {
    let newUser = { name, salary, gender, age, specialization }
    console.log(newUser)
    axios.post("https://doc-back.onrender.com/doctors", newUser)
      .then((res) => {
        console.log(res)
      })


  }
  return (
    <div className='login'>
      <h3 className='text-center display-4 mt-5'>Doctors Login</h3>
      <div className='text-center mt-4 '>
        <input type="text" placeholder='Enter your Name' name="name" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" placeholder='Salary' name='salary' onChange={(e) => setSalary(e.target.value)} />
        <br />
        <input type="text" placeholder='Gender' name='gender' onChange={(e) => setGender(e.target.value)} />
        <br />
        <input type="text" placeholder='Age' name='age' onChange={(e) => setAge(e.target.value)} />
        <br />
        <input type="text" placeholder='Specialization' name='specialization' onChange={(e) => setSpecialization(e.target.value)} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
