import Register from './Pages/Register'
import Home from './Pages/Home'
import { Navigate, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import UserRoute from './routes/UserRoute'
import AdminRoute from './routes/AdminRoute'
import UserDashboard from './dashboard/UserDashboard'
import AdminDashboard from './dashboard/AdminDashboard'

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/user" element={
        <UserRoute>
          <UserDashboard />
        </UserRoute>
      } />
      <Route path="/dashboard/admin" element={
        <AdminRoute>
          <AdminDashboard />
        </AdminRoute>
      } />
      <Route path="*" element={<Navigate to="/register" replace />} />
    </Routes>
  )
}

export default App
