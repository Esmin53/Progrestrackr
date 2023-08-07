import NewTaskForm from '@/components/NewTaskForm'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <NewTaskForm />
    </div>
    )
}

export default page