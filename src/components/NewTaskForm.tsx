"use client"

import {BiArrowBack} from "react-icons/bi"
import {IoFootsteps} from "react-icons/io5"
import {MdIncompleteCircle} from "react-icons/md"
import { FC, ReactEventHandler, useState } from 'react'
import { TaskCreationRequest, TaskValidator, taskTypeEnum } from "@/lib/validators/post"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"

interface NewTaskFormProps {
  
}

type FormValues = {
    title: string,
    description: string,
    goal?: number
    goalProgress?: number 
}

const NewTaskForm: FC<NewTaskFormProps> = ({}) => {
    const [isSteps, setIsSteps] = useState<boolean>(true)
    const [steps, setSteps] = useState<string[]>([])
    const [currentStepPlaceholder, setCurrentStepPlaceholder] = useState<string>("")
    const [type, setType] = useState<taskTypeEnum>('steps')
    const [formInput, setFormInput] = useState<FormValues>({
        title: "",
        description: "",
        goal: 0,
        goalProgress: 0
    })


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const payload = {
                title: formInput.title,
                description: formInput.description,
                type,
                steps: steps || undefined,
                goal: Number(formInput.goal) || undefined,
                goalProgress: Number(formInput.goalProgress) || undefined
            }

            await axios.post('/api/task/create', payload)

        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormInput({...formInput,
        [e.target.name]: e.target.value})
        console.log(formInput)
    }

  return (
    <form className='sm:w-[700px] h-fit rounded-lg p-2' onSubmit={(e) =>handleSubmit(e)}>
        <div className='flex items-center justify-between pb-2 border-b border-emerald-500 mb-2'>
            <h1 className='text-xl font-semibold'>Add a new task</h1>
            <span className="text-2xl font-bold">
                <BiArrowBack />
            </span>
        </div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" onChange={(e) => handleChange(e)} placeholder="Title"
        className="w-full h-9 rounded-md bg-slate-500 focus:outline-none pl-2 mb-2"/>
        <label htmlFor="description">Add a short description: </label>
        <textarea id="description" name="description" onChange={(e) => handleChange(e)} placeholder="Description"
        className="w-full h-44 bg-slate-500 rounded-md mb-2 focus:outline-none px-2"></textarea>
        <div className="flex gap-2 items-end">
        <div className="w-full sm:w-2/3 sm:h-12 h-10 bg-slate-800 rounded-md p-1 gap-1 flex">
            <div className={`w-1/2 h-full rounded-md coursor-pointer flex items-center justify-center 
            gap-1 cursor-pointer text-sm sm:text-md
            ${isSteps && 'bg-slate-500'}`} 
            onClick={() => {
                setIsSteps(true)
                setType('steps')
                }}>
                <span className="text-emerald-500">
                    <IoFootsteps />
                </span>
                Steps
            </div>
            <div className={`w-1/2 h-full rounded-md flex items-center justify-center gap-1 cursor-pointer 
            ${!isSteps && 'bg-slate-500'}`}
            onClick={() => {
                setIsSteps(false)
                setType('goal')
                }}>
                <span className="text-emerald-500">
                    <MdIncompleteCircle />
                </span>
                Goal
            </div>
        </div>
        </div>

        {isSteps ? (
            <p className="text-xs mt-1">Use steps for a multi-step task that can't be described with one single goal</p>
        ) : (
            <p className="text-xs mt-1">Use goal for a task with concrete goal, like a pages in a book</p>
        )}
        <hr className="w-full h-[1px] bg-zinc-400 my-2" />
        {isSteps ? (
            <div className="flex flex-col sm:flex-row gap-2 w-full items-end">
                <div className="flex flex-col sm:w-2/3 w-full">
                    <label htmlFor="step">Add some steps</label>
                    <input type="text" className="w-full bg-slate-500 h-10 rounded-md px-2 focus:outline-none" 
                    value={currentStepPlaceholder} placeholder="First step"
                    onChange={(e) => setCurrentStepPlaceholder(e.target.value)}/>
                </div>
                <div className="sm:w-1/3 w-full h-10 bg-emerald-500 rounded-md flex justify-center items-center text-sm cursor-pointer mt-1"
                onClick={() =>{
                    setSteps([...steps, currentStepPlaceholder])
                    setCurrentStepPlaceholder("")
                }}>Add step</div>
            </div>
        ) : (
        <div className="flex gap-2 w-full">
            <div className="w-1/2 flex flex-col">
                <label htmlFor="currentProgres">Current progress</label>
                <input type="number" name="goalProgress" onChange={(e) => handleChange(e)}
                className="w-full h-10 rounded-md bg-slate-500 focus:outline-none px-2" placeholder="Current progres"/>
            </div>
            <div className="w-1/2 flex flex-col">
                <label htmlFor="currentGoal">Current goal:</label>
                <input type="number" name="goal" onChange={(e) => handleChange(e)} placeholder="My gaol"
                className="w-full h-10 rounded-md bg-slate-500 focus:outline-none px-2"/>
            </div>
        </div>
        )}

        {isSteps && steps.length !== 0 && <div className="flex items-center justify-between mt-2 px-1 border-b"> 
            <p className="text-sm">Step {steps.length}: {steps[steps.length - 1]}</p>
            <p className="text-md text-red-500 cursor-pointer" onClick={() => {
                setSteps((previousArr) => (previousArr.slice(0, -1)))
            }}>Remove</p>
        </div> }

        <button className="w-full h-10 bg-emerald-500 text-md font-semibold rounded-md mt-4"
        type="submit" id="submit" >Add task</button>
    </form>
    )
}

export default NewTaskForm