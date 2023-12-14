import React from 'react'

function Footer() {
  return (
    <>
    <footer class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle Dark Mode</span>
        </label>


        <p class="text-sm text-gray-600 dark:text-gray-300">© Copyright 2024</p>

        <div class="flex -mx-2">
            <div className='cursor-pointer'>
              <p class="text-sm text-gray-600 dark:text-gray-300">Credits</p>     
            </div>

            <div className='ml-4 cursor-pointer'>
            <p class="text-sm text-gray-600 dark:text-gray-300">Security Settings</p> 
            </div>
            
        </div>
    </div>
</footer>

    </>
  )
}

export default Footer