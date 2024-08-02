import React from 'react'

function HeadquarterForm({index = 1}) {
  return (
    <>
    
      <h3 className='text-xl font-medium'>Headquarter : {index}</h3>
      <input type="text" placeholder='Headquarter Name' className='bg-gray-200 px-3 py-1 rounded w-[60vw] drop-shadow-md'/>
      <input type="text" placeholder='Headquarter Address' className='bg-gray-200 px-3 py-1 rounded w-[60vw] drop-shadow-md'/>
      <input type="text" placeholder='Headquarter Contact' className='bg-gray-200 px-3 py-1 rounded w-[60vw] drop-shadow-md'/>
    </>
  )
}

export default HeadquarterForm
