import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const AddTask = () => {

  const {AddTodo, handleClick} = useContext(AppContext)

  return (
    <div className='absolute flex items-center justify-center w-full h-16 bottom-2 md:top-1 md:w-52 md:right-1 ' >
      <button onClick={handleClick} className='text-white w-4/5 py-2 font-semibold text-xl font-sans bg-[#25689C]  rounded-md cursor-pointer z-[1]' >
        Add New Task
      </button>
    </div>
  )
}

export default AddTask
