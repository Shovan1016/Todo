import React from 'react'
import { useUser } from '@auth0/nextjs-auth0';


const userEmail = () => {
    const { user, error, isLoading } = useUser();

  return user.email
  
}

export default userEmail