import { Sidebar } from 'flowbite-react'
import React from 'react'
import Layout from '../components/Layout/Layout'
import SignIn from '../components/Authentication/SignIn'
import CreateAccount from '../components/Authentication/CreateAccount'
import Dashboard from '../components/Dashboard/Dashboard'

function Home() {
  return (
    <>
        <Dashboard />
    </>
  )
}

export default Home