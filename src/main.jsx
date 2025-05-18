import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StidentList from './components/StudentList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StidentList />
  </StrictMode>
)
