import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './routes/App.jsx'
import OnePlayer from './routes/OnePlayer.jsx'

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/OnePlayer",
        element: <OnePlayer />
      }
    ]
  }
])

export default AppRoutes
