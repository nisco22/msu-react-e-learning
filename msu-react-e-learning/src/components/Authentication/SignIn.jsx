import React from 'react'
import logo from './assets/msu-logo1.png'
import { useNavigate, Link } from 'react-router-dom'

function SignIn() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/home')
    }
  return (
    <>
    <div>
    <div className="w-full mt-10 max-w-sm mx-auto overflow-hidden bg-white rounded-md shadow-lg border-1 dark:bg-gray-800">
    <div className="px-6 py-12">
        <div className="flex justify-center mx-auto">
            <img className="w-auto h-15 sm:h-14" src={logo} alt="" />
        </div>

        {/* <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">MSU</h3> */}

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

        <form onSubmit={handleSubmit}>
            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Registration Number" aria-label="Registration Number" />
            </div>

            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
            </div>

            <div className="flex items-center justify-between mt-4">
                <a href="#" className="text-sm text-blue-600 dark:text-blue-200 hover:text-blue-500">Forget Password?</a>

                <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign In
                </button>
            </div>
        </form>
    </div>

    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
        <Link to='/create-account' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Create Account</Link>
    </div>
</div>
    </div>
    </>
  )
}

export default SignIn