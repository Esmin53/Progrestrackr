"use client"

import { progressInfo } from '@/lib/progressInfo'
import { FC } from 'react'

interface ProgresBarProps {
  props: {
    currentProgress: number | null
  }
}

const ProgresBar =  ({props}: ProgresBarProps) => {
  
    let progresColor =  progressInfo(props?.currentProgress)

    let width = `w-[${props.currentProgress}%]` 

    const div = <div className={`${width} bg-emerald-500 h-full rounded-md`}></div>
  
    return <div className={`w-full h-full rounded-md my-2 border-2 border${progresColor} p-[1.5px]`}>
          {div}
    </div>
}

export default ProgresBar