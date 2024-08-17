import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './layouts/Layout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

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
      },
      {
        path: '/crear-cuenta',
        element: <Register/>
      },
      {
        path: '/username',
        element: <h1>Bienvenido a tu cuenta</h1>
      }
    ]
  }
])

export default router