import React from 'react'
import ReactDOM from 'react-dom/client'

import { registerAdmin401Redirect } from '@api/_shared/axiosAdminAuthInterceptor'
import App from './App'

registerAdmin401Redirect()

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
