import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>     
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />        
      </ThemeProvider>
  </React.StrictMode>,
)
