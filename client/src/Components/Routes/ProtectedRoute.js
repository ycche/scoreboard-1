import React from 'react'
import { Navigate, Route } from "react-router-dom"

function ProtectedRoute({path, component}) {
  const isAuthenticated = sessionStorage.getItem("auth")
  return (
    <Route path = {path} exact element = {isAuthenticated ? (component) : (<Navigate to= "/signin"/>) } />
  )
}

export default ProtectedRoute
