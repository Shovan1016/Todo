import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AuthWrapper from '../components/AuthWrapper'
import Login from '../components/Login'
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user';
import Navv from '../components/Navv'
import MainContent from '../components/MainContent'


export default function Home() {
  const { user, error, isLoading } = useUser();
 

  return (
    <AuthWrapper>
    <>
      <Navv/>
      <MainContent/>
   
    </>
     </AuthWrapper>
  )
}
