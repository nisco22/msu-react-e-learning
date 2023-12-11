
import Sidebar from './Sidebar'
import React from 'react'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <div className="flex">
            <Topbar />
            <Sidebar />     
            <main className="flex-1 mt-8">
                <Outlet />
            </main>
        </div>
    </>
  )
}

export default Layout