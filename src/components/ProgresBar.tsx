

import { progressInfo } from '@/lib/progressInfo'
import { Suspense } from 'react'

interface ProgresBarProps {
  props: {
    currentProgress: number
  }
}

const ProgresBar = ({props}: ProgresBarProps) => {
    let progresColor = progressInfo(props?.currentProgress)

    return <div className={`w-full h-full rounded-md my-2 border-2 border${progresColor} p-[1.5px]`}>
        <Suspense fallback={<p>Loading...</p>}>
            <div style={{width: `${props.currentProgress}%`}} className={`h-full bg${progresColor}`}>
    {/* Without the span below that contains all the colors needed adding border and bg color dynamicaly doesn't work */}
              <span className='bg-red-500 bg-orange-500 bg-amber-500 bg-lime-300 bg-emerald-500 
              border-red-500 border-orange-500 border-amber-500 border-lime-300 border-emerald-500'></span>
            </div>
        </Suspense>
    </div>
}

export default ProgresBar