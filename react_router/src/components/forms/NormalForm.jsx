import React, { useState } from 'react';
let renderCount = 0

export default function NormalForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showFormData, setShowFormData] = useState(false)
  const onSubmit = (event) => {
    event.preventDefault()
    setShowFormData(true)
    console.log('Run Validations Manually, maintain & show errors on UI, if all good make API call.')
  }

  renderCount += 1
  return (
    <div className="w-1/2 flex justify-center items-center bg-gray-900 p-8">
      <div className="w-full shadow-lg rounded-md bg-white p-8 flex flex-col" style={{ height: '375px' }}>
        <h2 className="text-center font-medium text-2xl mb-4">
          Normal Form
        </h2>
        Render Count -- {renderCount}
        <form
          onSubmit={onSubmit}
          className="flex flex-1 flex-col justify-evenly"
        >
          <input
            className="border-2 outline-none p-2 rounded-md"
            placeholder="Name"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <button
            className=" flex justify-center p-2 rounded-md 
            w-1/2 self-center bg-gray-900  text-white hover:bg-gray-800"
            type='submit'
          >
            <span>
              Submit
            </span>
          </button>
        </form>
        {

          <div className='h-4'>
            <p> Data:
              {
                showFormData ?
                  <span> {name} {email} </span>
                  : null
              }
            </p>
          </div>
        }
      </div>
    </div>
  );
}