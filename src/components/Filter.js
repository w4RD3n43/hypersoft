import React from 'react'

const Filter = () => {
  return (
    <div className='p-3 md:h-20 md:flex' >
      <p className='m-4 font-semibold' >
        Filter By:  
      </p>
      <div className='flex items-center justify-around' >
      <input type='text' placeholder='Assignee'  className='w-1/4 text-center rounded-md md:h-6' />
      <select className='w-1/4 text-center text-gray-500 rounded-md md:h-6'  >
        <option>
          P1
        </option>
        <option>
          P2
        </option>
        <option>
          P3
        </option>
        <option>
          P4
        </option>
      </select>
      <input type='date' placeholder='date' className='text-center text-gray-500 rounded-md md:h-6'/>
      </div>
    </div>
  )
}

export default Filter
