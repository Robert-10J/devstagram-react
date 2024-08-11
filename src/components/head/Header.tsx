import Nav from './Nav'

const Header = () => {
  return (
    <>
      <header className="p-5 border-b bg-white shadow-md">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-3xl font-black">DevStagram</h1>

          <Nav/>
        </div>
      </header>
    </>
  )
}

export default Header