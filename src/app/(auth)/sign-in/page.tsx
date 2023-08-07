import SignIn from '@/components/SignIn'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

interface pageProps {
  
}

const page = async ({}) => {

  const session = await getServerSession(authOptions)

  if(session?.user) {
    redirect('/')
  }

  return <div className='flex items-center justify-center w-full h-full'>
    <SignIn />
  </div>
}

export default page