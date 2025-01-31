import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cbc from './component/Cbc.jsx'
import Fbc from './component/Fbc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cbc></Cbc>
    <Fbc></Fbc>
  </StrictMode>,
)
