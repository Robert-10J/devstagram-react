import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './layouts/Layout';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <App/>
      },
      {
        path: '/iniciar-sesion',
        element: <Login/>
      }
    ]
  }
])

export default router