import Header from '../components/Header'

const Layout = () => {
  return (
    <>
      <Header/>

      <main className="container mx-auto mt-10">
        <h2 className="font-black text-center text-3xl mb-10">
          Titulo
        </h2>
        Children
      </main>

      <footer className="text-center p-5 font-bold text-gray-500">
        DevStagram {Date()}
      </footer>
    </>
  )
}

export default Layout