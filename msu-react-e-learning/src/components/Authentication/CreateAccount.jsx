import React, { useState } from 'react';
import logo from './assets/msu-logo1.png'


const CreateAccount = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleRegistrationNumberChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center min-h-screen px-6 mx-auto">
        
        {/* <h1 class="mt-4 text-2xl font-semibold tracking-wide text-center text-gray-800 capitalize md:text-3xl dark:text-white">
            MSU
        </h1> */}

        <div class="flex items-center mt-6">
            <p class="text-gray-500 dark:text-gray-400"></p>
        </div>

        <div class="w-full max-w-md mx-auto mt-2">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div class="flex justify-center mx-auto mb-6">
                    <img class="w-auto h-15 sm:h-14" src={logo} alt=""/>
                  </div>

                <div className='mb-4'>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
                  Registration Number
                </label>
                <input type="text" placeholder="Registration Number" value={registrationNumber}
                onChange={handleRegistrationNumberChange} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border
                border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400
                  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
                  Date of Birth
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                  >
                    <option value="">Day</option>
                    {/* Add options for day */}
                  </select>
                  <select
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="month"
                    value={month}
                    onChange={handleMonthChange}
                  >
                    <option value="">Month</option>
                    {/* Add options for month */}
                  </select>
                  <select
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="year"
                    value={year}
                    onChange={handleYearChange}
                  >
                    <option value="">Year</option>
                    {/* Add options for year */}
                  </select>
                </div>
              </div>

                <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    “Next”
                </button>

            </form>
        </div>
    </div>
</section>


  );
};

export default CreateAccount;