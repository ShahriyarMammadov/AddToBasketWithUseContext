import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ModeProvider from './context/dataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ModeProvider>
      <App />
    </ModeProvider>
  </BrowserRouter>
)
