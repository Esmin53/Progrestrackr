import { FC } from 'react'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return <h1 className='text-4xl w-full text-center font-bold mb-6 border-b 
  pb-2 border-slate-800 border-b-2 sticky top-0 bg-slate-700 z-[40] py-4'>
    Progrestrackr.
  <span className='text-emerald-500'>io</span>
  </h1>
}

export default Navbar