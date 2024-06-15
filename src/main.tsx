import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import RainbowContextApp from './RainbowKit'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RainbowContextApp>
      <App />
    </RainbowContextApp>
  </React.StrictMode>,
)
