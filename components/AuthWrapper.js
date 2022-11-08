import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user';
import Login from './Login';
import Loader from './Loader'

const AuthWrapper = (props) => {

    const { user, error, isLoading } = useUser();
    

    if (isLoading) {
        return <div><Loader/></div>;
      }
      if (error) {
        return <div>Oops... {error.message}</div>;
      }

      if(user)
      {
        return <>{props.children}</>
      }

      if(!user)
      {
        return <Login/>
      }
   

}

export default AuthWrapper
