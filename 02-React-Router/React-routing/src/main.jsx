import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/index.css"
import router from './router'
import { RouterProvider } from 'react-router-dom'
import "./server"



createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router} />

  </StrictMode>
)
