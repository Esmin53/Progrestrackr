'use client'

import { FC } from 'react'
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
import {signIn} from "next-auth/react"

interface SignInProps {
  
}

const SignIn: FC<SignInProps> = ({}) => {

    const googleSignIn = async () => {
        try {
            await signIn('google')
        } catch (error) {
            console.log(error)
        }
    }
    
    const githubSignIn = async () => {
        try {
            await signIn('github')
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div className='h-full w-full sm:w-[500px] sm:h-[500px] bg-slate-600 
        rounded-lg flex items-center justify-center flex-col p-2'>
        <h1 className='text-3xl font-bold'>Welcome back</h1>
        <p className='text-sm text-center py-4'>By continuing you agree to Progrestrackr's privacy policy and terms and conditions</p>
        <button className='w-full h-11 bg-zinc-900 hover:opacity-90 text-sm font-semibold rounded-md my-2 flex items-center justify-center gap-2'
        onClick={googleSignIn}>
            <span className='text-xl'><FcGoogle /> </span>
            Sign In
        </button>
        <button className='w-full h-11 bg-zinc-900 hover:opacity-90 text-sm font-semibold rounded-md flex items-center justify-center gap-2'
        onClick={githubSignIn}>
            <span className='text-xl'><FaGithub /> </span> 
            Sign In
        </button>
        <p className='text-sm'>Don't have an account?{' '}Sign Up.</p>
    </div>
  )
}

export default SignIn