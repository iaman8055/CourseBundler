import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home'
import Header from './components/Layout/Header/Header'
import Courses from './components/Courses/Courses'
import Footer from './components/Layout/Header/Footer'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ForgetPassword from './components/Auth/ForgetPassword'
import ResetPassword from './components/Auth/ResetPassword'
import Contact from './components/Contact/Contact'
import Request from './components/Request/Request'
import Subscribe from './components/Payment/Subscribe'
import PaymentSuccess from './components/Payment/PaymentSuccess'
import NotFound from './components/NotFound/NotFound'
import PaymentFail from './components/Payment/PaymentFail'
import CoursePage from './components/CoursePage/CoursePage'
import Profile from './components/Profile/Profile'
import ChangePassword from './components/Profile/ChangePassword'
import UpdateProfile from './components/Profile/UpdateProfile'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import CreateCourse from './components/Admin/CreateCourse/CreateCourse'
import Users from './components/Admin/Users/Users'
import AdminCourses from './components/Admin/Courses/AdminCourses'
const App = () => {
  return <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/changepassword' element={<ChangePassword/>}/>
      <Route path='/updateprofile' element={<UpdateProfile/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/Resetpassword/:token' element={<ResetPassword/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/request' element={<Request/>}/>
      <Route path='/subscribe' element={<Subscribe/>}/>
      <Route path='/paymentSuccess' element={<PaymentSuccess/>}/>
      <Route path='/notfound' element={<NotFound/>}/>
      <Route path='/paymentfail' element={<PaymentFail/>}/>
      <Route path='/course/:id' element={<CoursePage/>}/>
                    `{/* Admin  */}
      <Route path= '/admin/dashboard' element={<Dashboard/>}/>
      <Route path= '/admin/createcourse' element={<CreateCourse/>}/>
      <Route path= '/admin/users' element={<Users/>}/>
      <Route path= '/admin/courses' element={<AdminCourses/>}/> 
    </Routes>
    <Footer/>
  </Router>
}

export default App