import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieContext from './context/MovieContext.jsx'
import { BrowserRouter } from "react-router-dom";
import AdminAuthProvider from './context/AdminAuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MovieContext>
      <AdminAuthProvider>
      <App />
      </AdminAuthProvider>
    </MovieContext>
  </BrowserRouter>
)
