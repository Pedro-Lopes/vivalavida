import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Azul náutico é a identidade padrão; parâmetros permitem comparar as alternativas.
const palette = new URLSearchParams(window.location.search).get('paleta')
document.documentElement.dataset.palette =
  palette && ['areia', 'salvia', 'azul', 'original'].includes(palette)
    ? palette
    : 'azul'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
