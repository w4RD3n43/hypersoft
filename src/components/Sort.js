import React from 'react'

const Sort = () => {
  return (
    <div className='items-center justify-start hidden w-[180px] mx-4 md:flex' >
      <p className='m-3 font-semibold' >
        Sort By:
      </p>
      <select className='flex-1 text-center text-gray-500 rounded-md md:w-10 md:h-6'  >
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
    </div>
  )
}

export default Sort
