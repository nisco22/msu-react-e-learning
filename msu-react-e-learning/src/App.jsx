import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignInPage from './pages/SignInPage'
import CreateAccountPage from './pages/CreateAccountPage'
import FeesStructure from './pages/FeesStructure'
import StudentEmail from './pages/StudentEmail'
import Profile from './pages/Profile'
import Results from './pages/Results'
import Finacials from './pages/Finacials'
import Residence from './pages/Residence'
import OnlineClasses from './pages/OnlineClasses'
import Library from './pages/Library'
import Timetable from './pages/Timetable'
import Notices from './pages/Notices'
import Counselling from './pages/Counselling'
import ContinuousAssessment from './pages/ContinuousAssessment'
import Settings from './pages/Settings'
import Logout from './pages/Logout'
import Layout from './components/Layout/Layout'


function App() {

  return (
    <div>
    
    <Routes>

      <Route path='signin' element={<SignInPage />}/>
      <Route path='create-account' element={<CreateAccountPage />}/>

      <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='home' element={<Home />}/>
      <Route path='feesstructure' element={<FeesStructure />}/>
      <Route path='student-email' element={<StudentEmail />}/>
      <Route path='profile' element={<Profile />}/>
      <Route path='results' element={<Results />}/>
      <Route path='financials' element={<Finacials />}/>
      <Route path='residence' element={<Residence />}/>
      <Route path='online-classes' element={<OnlineClasses />}/>
      <Route path='library' element={<Library />}/>
      <Route path='timetable' element={<Timetable />}/>
      <Route path='notices' element={<Notices />}/>
      <Route path='e-counselling' element={<Counselling />}/>
      <Route path='assessment' element={<ContinuousAssessment />}/>
      <Route path='settings' element={<Settings />}/>
      <Route path='logout' element={<Logout />}/>
      </Route>

    </Routes>
    </div>
  )
}

export default App
