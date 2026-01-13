import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/user/Home'
import AdminLogin from './pages/admin/AdminLogin'
import AdminPage from './components/admin/AdminDashboard'
import EditMovie from './pages/admin/EditMovie'
import AddMovie from './pages/admin/AddMovie'
import DeleteMovie from './pages/admin/DeleteMovie'
import AdminDashboard from './components/admin/AdminDashboard'
import ProtectedRoute from './components/safe/ProtectedRoute'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin/dashboard' element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path='/admin' >
        <Route path="delete" element={<ProtectedRoute><DeleteMovie /></ProtectedRoute>} />
        <Route path="edit" element={<ProtectedRoute><EditMovie /></ProtectedRoute>} />
        <Route path="add" element={<ProtectedRoute><AddMovie /></ProtectedRoute>} />
      </Route>
      
        <Route path='/admin/login' element={<AdminLogin />} />
    </Routes>
  )
}

export default App