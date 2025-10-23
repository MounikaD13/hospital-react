import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Doctors.css'

export default function Patients() {
    const [patients, setPatients] = useState([])
    useEffect(() => {
        // console.log('from useEffect')
        loadPatients()
    }, [])
    function loadPatients() {
        axios.get("https://doc-back.onrender.com/patients")
            .then((res) => {
                // console.log(res.data)
                setPatients(res.data)
            })
    }
    return (
        <div className='container docpat mt-5'>
            <h2 className='text-center mb-4 display-3'>Patients Details</h2>
            <div className='row'>
                {patients.map((i) => (
                    <div className='col-md-4 mb-3' key={i.id}>
                        <div className='card'>
                            <h5 className='card-title text-center mt-4'>ID-{i.id}</h5>
                            <div className='card-body ps-md-4'>
                                <p>Name: {i.name}</p>
                                <p>Age: {i.age} yrs</p>
                                <p>Weight: {i.weight} kgs</p>
                                <p>Gender: {i.gender}</p>
                                <p>Disease: {i.disease}</p>
                               <p>Doctor: {i.doctor?.name || 'No information'}</p>
                               <p>Doctor's specialization: {i.doctor?.specialization || 'No information'}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {console.log(patients)}
        </div>
    )
}
