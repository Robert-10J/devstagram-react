const Nav = () => {
  return (
    <>
      <nav className="flex gap-3 items-center">
        <p className="font-bold text-gray-700 text-sm">
          Hola: <span className="font-normal">Rob</span>
        </p>
        <form action="" method="POST">
          <input
            type="submit"
            value="Cerrar Sesión"
            className="font-bold text-gray-700 text-sm"
          />
        </form>
      </nav>

      <nav className="flex gap-3 items-center">
        <a href="{{ route('login') }}" className="font-bold uppercase text-gray-600 text-sm">Login</a>
        <a href="{{ route('register') }}" className="font-bold uppercase text-gray-600 text-sm">Crear Cuenta</a>
      </nav>
    </>
  )
}

export default Nav