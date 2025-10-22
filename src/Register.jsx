import React, { useState } from 'react'
import axios from 'axios'
import './Register.css'

export default function Register() {
  const [name, setName] = useState("")
  const [weight, setWeight] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [disease, setDisease] = useState("")
  const [doctor, setDoctor] = useState({ name: "", specialization: "" });
  function handleSubmit() {
    let newUser = { name, weight, gender, age, disease, doctor }
    console.log(newUser)
    axios.post("https://doc-back.onrender.com/patients", newUser)
      .then((res) => {
        console.log(res)
      })
  }
  return (
    <div className='reg'>
      <h3 className='text-center mt-5'>Patients Registration</h3>
      <div className='text-center mt-4 '>
        <input type="text" placeholder='Enter your Name' name="name" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" placeholder='Weight' name='weight' onChange={(e) => setWeight(e.target.value)} />
        <br />
        <input type="text" placeholder='Gender' name='gender' onChange={(e) => setGender(e.target.value)} />
        <br />
        <input type="text" placeholder='Age' name='age' onChange={(e) => setAge(e.target.value)} />
        <br />
        <input type="text" placeholder='Disease' name="disease" onChange={(e) => setDisease(e.target.value)} />
        <br />
        <input type="text" placeholder="Doctor Name" onChange={(e) => setDoctor({ ...doctor, name: e.target.value })} />
        <br />
        <input type="text" placeholder="Specialization" onChange={(e) => setDoctor({ ...doctor, specialization: e.target.value })} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
