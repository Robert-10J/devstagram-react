import { Outlet } from 'react-router-dom'
import Header from '../components/head/Header'
import { year } from '../helpers'


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