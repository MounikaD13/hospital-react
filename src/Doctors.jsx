import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Doctors.css"

export default function Home() {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        // console.log('from useEffect')
        loadDoctors()
    }, [])
    function loadDoctors() {
        axios.get("https://doc-back.onrender.com/doctors")
            .then((res) => {
                // console.log(res.data)
                setDoctors(res.data)
            })
    }
    return (
        <div className='container mt-5'>
            <h2 className='text-center mb-4'>Doctors Details</h2>
            <div className='row'>
                {doctors.map((i) => (
                    <div className='col-md-4 mb-3' key={i.id}>
                        <div className='card'>
                            <h5 className='card-title text-center mt-4'>ID-{i.id}</h5>
                            <div className='card-body ps-md-4'>
                                <p>Name: {i.name}</p>
                                <p>Age: {i.age} yrs</p>
                                <p>Gender: {i.gender}</p>
                                <p>Salary: {i.salary}</p>
                                <p>Specialization: {i.specialization}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {console.log(doctors)}
        </div>
    )
}
