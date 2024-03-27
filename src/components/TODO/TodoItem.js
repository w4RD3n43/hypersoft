import React, { useContext } from 'react'
import { MdCancel } from "react-icons/md";
import TaskInput from './TaskInput';
import { AppContext } from '../../context/AppContext';

const TodoItem = () => {

  const {handleClick} = useContext(AppContext)

  return (
    <div className='absolute top-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 z-[2]' >
      <div className='flex flex-col items-center justify-center w-4/5 bg-white rounded-md md:w-1/2 h-[600px] md:h-3/5 lg:w-1/4' >
        <div className='flex items-center justify-around w-full h-12' >
          <p className='text-lg font-semibold' >
            Add New Task
          </p>
          <p className='text-lg cursor-pointer ' >
            <MdCancel onClick={handleClick} />
          </p>
        </div>
        <div className='flex flex-col items-center justify-center w-full bg-gradient-to-r from-pink-200 to-purple-300 h-5/6' >
          <TaskInput/>
        </div>
        <div className='flex items-center justify-end w-full p-5' >
          <button className='text-white w-auto px-2 font-semibold text-xl font-sans bg-[#25689C]  rounded-md cursor-pointer mx-2 z-[1]' >
            Submit
          </button>
          <button className='text-white auto px-2 font-semibold text-xl font-sans bg-[#25689C]  rounded-md cursor-pointer z-[1]' >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
