"use client"

import {BiArrowBack} from "react-icons/bi"
import {IoFootsteps} from "react-icons/io5"
import {MdIncompleteCircle} from "react-icons/md"
import { FC, useState } from 'react'

interface NewTaskFormProps {
  
}

const NewTaskForm: FC<NewTaskFormProps> = ({}) => {
    const [isSteps, setIsSteps] = useState<boolean>(true)



  return (
    <div className='sm:w-[700px] h-fit rounded-lg p-2'>
        <div className='flex items-center justify-between pb-2 border-b border-emerald-500 mb-2'>
            <h1 className='text-xl font-semibold'>Add a new task</h1>
            <span className="text-2xl font-bold">
                <BiArrowBack />
            </span>
        </div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title"
        className="w-full h-9 rounded-md bg-slate-500 focus:outline-none pl-2 mb-2"/>
        <label htmlFor="description">Add a short description: </label>
        <textarea name="description" id="description" className="w-full h-44 bg-slate-500 rounded-md mb-2 focus:outline-none"></textarea>
        
        <div className="flex gap-2 items-end">
        <div className="w-2/3 h-12 bg-slate-800 rounded-md p-1 gap-1 flex">
            <div className={`w-1/2 h-full rounded-md coursor-pointer flex items-center justify-center gap-1 cursor-pointer
            ${isSteps && 'bg-slate-500'}`}
            onClick={() => setIsSteps(true)}>
                <span className="text-emerald-500">
                    <IoFootsteps />
                </span>
                Steps
            </div>
            <div className={`w-1/2 h-full rounded-md flex items-center justify-center gap-1 cursor-pointer 
            ${!isSteps && 'bg-slate-500'}`}
            onClick={() => setIsSteps(false)}>
                <span className="text-emerald-500">
                    <MdIncompleteCircle />
                </span>
                Goal
            </div>
        </div>
        <div className="w-1/3 flex flex-col">
            <label htmlFor="type" className="text-xs">Add a type of task(optional)</label>
            <select name="type" className="w-full h-12 bg-slate-800 py-2" placeholder="Type">

            </select>
        </div>
        </div>

        {isSteps ? (
            <p className="text-xs mt-1">Use steps for a multi-step task that can't be described with one single goal</p>
        ) : (
            <p className="text-xs mt-1">Use goal for a task with concrete goal, like a pages in a book</p>
        )}
        <hr className="w-full h-[1px] bg-zinc-400 my-2" />
        {isSteps ? (
            <div className="flex gap-2 w-full items-end">
                <div className="flex flex-col w-2/3">
                    <label htmlFor="step">Add some steps</label>
                    <input type="text" className="w-full bg-slate-500 h-10 rounded-md"/>
                </div>
                <button className="w-1/3 h-10 bg-emerald-500 rounded-md flex justify-center items-center text-sm">Add step</button>
            </div>
        ) : (
        <div className="flex gap-2 w-full">
            <div className="w-1/2 flex flex-col">
                <label htmlFor="currentProgres">Current progress</label>
                <input type="text" className="w-full h-10 rounded-md bg-slate-500 focus:outline-none"/>
            </div>
            <div className="w-1/2 flex flex-col">
                <label htmlFor="currentGoal">Current goal:</label>
                <input type="text" className="w-full h-10 rounded-md bg-slate-500 focus:outline-none"/>
            </div>
        </div>
        )}
        <button className="w-full h-10 bg-emerald-500 text-md font-semibold rounded-md mt-4">Add task</button>
    </div>
    )
}

export default NewTaskForm