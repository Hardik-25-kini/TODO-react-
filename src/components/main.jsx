import React, { useState } from 'react'

const Main = ({ showInput, setShowInput }) => {

    const [time, setTime] = useState("")
    const [task, setTask] = useState("")
    const [details, setDetails] = useState("")
    const [isComplete, setIsComplete] = useState(false)


    const mouseOverBtn = (e) => {
        e.currentTarget.style.backgroundColor = "#a067ea"
    }
    const mouseLeaveBtn = (e) => {
        e.currentTarget.style.backgroundColor = "#f1e4ff"
    }



    const dates = Array.from({ length: 4 }, (_, i) => {
        const date = new Date()
        date.setDate(date.getDate() + i)

        return {
            date: date.getDate(),
            day: date.toLocaleDateString("en-US", {
                weekday: "short"
            })
        }
    })




    return (
        <div className='bg-[#a067ea] m-0 p-0'>
            <div className='bg-white rounded-tl-4xl m-0'>
                <div className="date_list flex justify-between px-8 py-5 ">

                    {dates.map((item, index) => {
                        return (
                            <button key={index} onMouseOver={mouseOverBtn} onMouseLeave={mouseLeaveBtn} className="container  bg-[#f1e4ff] size-18 rounded-xl flex items-center justify-center hover:font-bold">
                                <div className='p-2'>
                                    <div className='flex justify-center items-center'>{item.date}</div>
                                    <div className='flex justify-center items-center'>{item.day}</div>
                                </div>
                            </button>
                        )
                    })}
                </div>


                <div className="task font-bold text-3xl p-8 py-2">
                    <h1>My Tasks</h1>
                </div>


                {showInput && (
                    <div onMouseOver={mouseOverBtn} onMouseLeave={mouseLeaveBtn} className="task_list flex items-center justify-between bg-[#f1e4ff] h-20 m-8 px-5 rounded-2xl hover:font-bold">
                        <div className='flex items-center gap-2 sm:gap-10'>
                            <input type="time" value={time} onChange={(e) =>
                                setTime(e.target.value)
                            } />
                            <div className=' flex-col w-25 ' >
                                <div>
                                    <input type="text" placeholder='Task Name' value={task} onChange={(e) =>
                                        setTask(e.target.value)
                                    } className={` w-25 text-sm sm:text-lg font-bold ${isComplete ? "line-through" : ""} `} />
                                </div>

                                <div>
                                    <input type="text" placeholder='Task details' value={details} onChange={(e) =>
                                        setDetails(e.target.value)
                                    } className={` w-25 text-sm sm:text-lg font-bold ${isComplete ? "line-through" : ""} `} />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div><input type="checkbox" onChange={(e) =>
                                setIsComplete(e.target.checked)
                            } className='scale-150 m-4 flex' /></div>
                            <div><button className='bg-white text-[#a067ea] w-15 text-sm sm:w-20 sm:text-lg p-1 rounded-lg hover:font-bold'>
                                Cancel
                            </button></div>
                        </div>
                    </div>
                )}



            </div>
        </div>
    )
}

export default Main
