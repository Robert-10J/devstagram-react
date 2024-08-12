const Login = () => {
  return (
    <>
      <h2 className="font-black text-center text-3xl mb-10">
        Iniciar Sesión
      </h2>

      <div className="md:flex md:justify-center md:gap-10 md:items-center">

        <div className="md:w-6/12 p-5">
          <img src="/img/login.jpg" alt="Imagen registro de usuarios" />
        </div>

        <div className="md:w-4/12 bg-white p-6 rounded-lg shadow">
          <form action="" method="POST" noValidate>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block uppercase text-gray-500 font-bold"
              >E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                className="border p-3 w-full rounded-lg"
              />
              {/* <p className="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">{{ $message }}</p> */}
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-2 block uppercase text-gray-500 font-bold"
              >Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                className="border p-3 w-full rounded-lg"
              />
            </div>

            <div className="mb-5">
              <input type="checkbox" name="remember" id="remember" />
              <label
                className="text-gray-500 text-sm px-2"
                htmlFor="remember"
              >Mantener sesión activa</label>
            </div>

            <input
              type="submit" value="Iniciar sesión"
              className="bg-sky-600 hover:bg-sky-700 transition-colors cursor-pointer uppercase font-bold w-full p-3 text-white rounded-lg"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login