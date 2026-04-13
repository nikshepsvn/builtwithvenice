import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.tsx'
import Splash from './components/Splash.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Splash>
      <App />
    </Splash>
  </StrictMode>,
)
