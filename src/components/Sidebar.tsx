import SidebarNavigation from './SidebarNavigation'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import UserAvatar from './UserAvatar'
import {GiHamburgerMenu} from "react-icons/gi"

interface SidebarProps {
  
}

const Sidebar = async ({}) => {

  const session = await getServerSession(authOptions)

  return <div className='max-h-screen bg-slate-800 shadow flex flex-col px-2 py-4 sticky right-0 z-[40] top-0'>
    <div className='flex items-center justify-between w-64'>
        <h1 className='text-xl font-semibold'>Progrestrackr</h1>
        <GiHamburgerMenu className='text-xl cursor-pointer' />
    </div>
    <div className='w-full h-[1px] bg-emerald-500 sm:mb-20 mt-5' />
    <div className=''>
    <SidebarNavigation />
    </div>
    <div className='flex justify-between items-center mt-auto'>
        <p>{session?.user.name}</p>
        <div className='w-10 h-10 rounded-full bg-slate-700 relative overflow-hidden'>
            <UserAvatar user={{name: session?.user.name || null, image: session?.user.image || null}}/>
        </div>
    </div>
  </div>
}

export default Sidebar