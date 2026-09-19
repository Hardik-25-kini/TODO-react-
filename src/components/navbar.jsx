import React, { useEffect, useState } from 'react'

const Navbar = ({setShowInput}) => {

  const [click, setClick] = useState(0)
  const [time, setTime] = useState("")
  const [task, setTask] = useState("")
  const [details, setDetails] = useState("")


  return (
    <div className='bg-[#a067ea] h-1/3 m-0 p-0'>
      <div className='h-[45%] p-5 px-8'>
        <ul className='flex items-center justify-between'>
          <li className='text-white font-extrabold '>
            <div className='pt-1.75 text-3xl'>
              ⠛
            </div>
          </li>
          <li className='text-white'>
            DATE MONTH
          </li>
          <li className='text-white'>⏱︎ </li>
        </ul>
      </div>
      <div className='h-[45%]  p-5 px-8'>
        <ul className='flex justify-between '>
          <li>
            <div>
              <ul className=' text-white'>
                <li className='text-2xl'>Today</li>
                <li className='text-xs'>6 Tasks</li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <button onClick={() => setShowInput(true)} className='bg-white text-[#a067ea] w-20 p-1 rounded-lg hover:font-bold'>
                Add New
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Navbar
