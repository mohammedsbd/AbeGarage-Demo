// import the router from react-router
import { Routes, Route } from 'react-router' 
//import the pages components
import Home from './pages/Home'
import Login from './pages/Login'
import AddEmployee from './pages/AddEmployee'
import './App.css'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add_employee" element={<AddEmployee />} />
    </Routes>

    </>
  )
}

export default App
