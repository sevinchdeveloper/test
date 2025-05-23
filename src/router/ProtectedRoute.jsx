import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({isAuthenticated}) => {
  return (
    isAuthenticated ? <Outlet/> : <Navigate to="/auth/login"/>
  )
}

export default ProtectedRoute