import React from 'react'
import HeadquarterForm from './HeadquarterForm/HeadquarterForm'

function OrganisationForm() {
  return (
    <main className='min-h-screen py-28 px-12'>
      <form action="#" className='flex flex-col justify-center items-center gap-5 bg-custom-offWhite p-5 rounded-xl shadow-md'>
        <h2 className='text-3xl font-medium'>Join as a Organisation</h2>
        <input type="text" placeholder='Organisation Name' className='bg-gray-200 px-3 py-1 rounded w-[60vw] drop-shadow-md'/>
        <input type="email" placeholder='Email' className='bg-gray-200 px-3 py-1 rounded w-[60vw] drop-shadow-md'/>
        <input type="password" placeholder='Password' className='bg-gray-200 px-3 py-1 rounded w-[60vw] drop-shadow-md'/>
        <input type="text" placeholder='Organisation Address' className='bg-gray-200 px-3 py-1 rounded w-[60vw] drop-shadow-md'/>
        <input type='text' placeholder='Organisation Contact' className='bg-gray-200 px-3 py-1 rounded w-[60vw] drop-shadow-md'/>
        <input type='file' placeholder='Organisation Profile' className='bg-gray-200 px-3 py-1 rounded w-[60vw] drop-shadow-md' title='Organisation Profile'/>
        <input type='text' placeholder='Materials Accepted' className='bg-gray-200 px-3 py-1 rounded w-[60vw] drop-shadow-md'/>
        <HeadquarterForm />
        <button className='bg-green-300 py-2 px-12 rounded-md text-lg font-bold shadow hover:scale-105 transition duration-200 ease-in-out'>Join Us</button>
      </form>
    </main>
  )
}

export default OrganisationForm
