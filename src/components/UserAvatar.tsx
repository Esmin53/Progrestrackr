import { FC } from 'react'
import {User} from "@prisma/client"
import Image from 'next/image'

interface UserAvatarProps {
  user: Pick<User, 'image' |'name'>
}

const UserAvatar: FC<UserAvatarProps> = ({user}: UserAvatarProps) => {
  return <div className='h-full w-full'>
    {user.image && <Image src={user.image} fill alt='User profile picture'/>}
  </div>
}

export default UserAvatar