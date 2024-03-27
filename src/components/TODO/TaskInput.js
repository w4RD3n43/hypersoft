import React from 'react'
import UserInputs from './UserInputs'
import Status from './Status'

const TaskInput = () => {
  return (
    <div className="flex flex-col w-full h-full" >
      <UserInputs/>
      <Status/>
    </div>
  )
}

export default TaskInput
