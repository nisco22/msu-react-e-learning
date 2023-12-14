
import Sidebar from './Sidebar'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Side from './Side'
import Footer from './Footer'

function Layout() {
  return (
    <div className='bg-gray-100'>
        <div className="grid grid-cols-6">
              <div className='bg- text-gray-700 rounded-sm shadow-md border-spacing-2 hidden lg:block'>
              <Side />
              </div>               
            <main className="col-span-5">
                <div className='hidden lg:block'>
                <Navbar />
                </div>
                <div className='pl-4 pr-2 mt-4 mb-2'>
                <Outlet />
                </div>
                <Footer />

            </main>            
        </div>
    </div>
  )
}

export default Layout