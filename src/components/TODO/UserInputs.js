import React from 'react'

const UserInputs = () => {
  return (
    <div className='p-5 text-lg font-semibold w-full' >
      <div>
        <p>
          TItle:
        </p>
        <input type='text' placeholder='Title...' />
      </div>
      <div>
        <p>
          Description
        </p>
        <input type='text' placeholder='Title...' />
      </div>
      <div>
        <p>
          Team:
        </p>
        <input type='text' placeholder='Title...' />
      </div>
      <div>
        <p>
          Assignee
        </p>
        <input type='text' placeholder='Title...' />
      </div>
    </div>
  )
}

export default UserInputs
