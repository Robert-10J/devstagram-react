import { Outlet } from 'react-router-dom'
import { year } from '../helpers'
import Header from '../components/header/Header'


const Layout = () => {
  return (
    <>
      <Header/>

      <main className="container mx-auto mt-10">
        <Outlet/>
      </main>

      <footer className="text-center p-5 font-bold text-gray-500">
        DevStagram { year }
      </footer>
    </>
  )
}

export default Layout