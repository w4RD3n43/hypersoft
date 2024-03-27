import React from 'react'
import Filter from './Filter';
import AddTask from './AddTask'
import Sort from './Sort';
import TodoCards from './TODO/TodoCards';


const Border = () => {
  return (
    <div className='relative flex flex-col top-20 md:left-[30px] md:h-[900px] lg:left-[50px] lg:h-[780px] left-[11px] w-11/12 h-[750px] border-[3px] shadow-xl border-white rounded-md' >
      <AddTask/>
      <Filter/>
      <Sort/>
      <TodoCards/>
    </div>
  )
}

export default Border
