import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-stone-900 min-h-screen'>
      <div className='container max-w-sm px-3'>
        <App />
      </div>
    </div>
  </React.StrictMode>,
)
