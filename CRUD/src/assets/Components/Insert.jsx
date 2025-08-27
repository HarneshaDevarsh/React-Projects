import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Insert = () => {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    email: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/Students', formData)
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => console.log(err))
  }



  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">
        <div className="max-w-lg mx-auto bg-white p-8 shadow-2xl rounded-2xl">
          <h1 className='mx-auto text-center text-2xl font-semibold text-gray-500'>Enter Student Details</h1>

          <form onSubmit={handleSubmit} className='mt-8'>
            <label className='block font-semibold'>Name :</label>
            <input
              type="text"
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              placeholder='Enter Your Name'
              className='border border-gray-300 px-2 py-2 mt-2 mb-4 w-full rounded-lg' />

            <label className='block font-semibold'>Age :</label>
            <input
              type="number"
              name='age'
              value={formData.age}
              onChange={handleChange}
              required
              placeholder='Enter Your Age'
              className='border border-gray-300 px-2 py-2 mt-2 mb-4 w-full rounded-lg' />

            <label className='block font-semibold'>Contact :</label>
            <input
              type="number"
              name='contact'
              value={formData.contact}
              onChange={handleChange}
              required
              placeholder='Enter Your Contact Number'
              className='border border-gray-300 px-2 py-2 mt-2 mb-4 w-full rounded-lg' />

            <label className='block font-semibold'>Email :</label>
            <input
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Enter Your Email Address'
              className='border border-gray-300 px-2 py-2 mt-2 w-full rounded-lg' />

            <div className='flex justify-between mt-5'>
              <button
                className='bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-lg text-white font-semibold'>
                Submit
              </button>

              <Link
                to={'/'}
                className='bg-orange-700 hover:bg-orange-800 px-3 py-2 rounded-lg text-white font-semibold'>
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Insert