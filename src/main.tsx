import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import i18n from 'i18next'
import App from './App.tsx'
import './styles/Main.scss';
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    
  })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
