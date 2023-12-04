
import Sidebar from './Sidebar'
import React from 'react'

function Layout() {
  return (
    <>
        <div className="flex">
            <Sidebar />
            <main className="flex-1">
                {/* Your main content here */}
            </main>
        </div>
    </>
  )
}

export default Layout