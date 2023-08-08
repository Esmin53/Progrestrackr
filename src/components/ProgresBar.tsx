import { FC } from 'react'

interface ProgresBarProps {
  progresColor: string
}

const ProgresBar: FC<ProgresBarProps> = ({progresColor}) => {
  
    console.log(progresColor)

  
    return <div className={`w-full h-full rounded-md my-2 border-2 border${progresColor} `}>

    </div>
}

export default ProgresBar