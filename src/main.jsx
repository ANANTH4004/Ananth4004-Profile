import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import IncrementDecrement from './components/useStateExample.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IncrementDecrement />
  </StrictMode>
)
