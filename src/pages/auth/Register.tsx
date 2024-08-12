const Register = () => {
  return (
    <>
      <h2 className="font-black text-center text-3xl mb-10">
        Iniciar Sesión
      </h2>

      <div className="md:flex md:justify-center md:gap-10 md:items-center">

    <div className="md:w-6/12 p-5">
      <img src="/img/registrar.jpg" alt="Imagen registro de usuarios" />
    </div>

    <div className="md:w-4/12 bg-white p-6 rounded-lg shadow">
      <form action="" method="POST" noValidate>
        <div className="mb-5">
          <label 
            htmlFor="name"
            className="mb-2 block uppercase text-gray-500 font-bold"
          >Nombre:</label>
          <input 
            type="text"
            id="name"
            name="name"
            placeholder="Tu Nombre"
            className="border p-3 w-full rounded-lg @error"
          />
        </div>
        
        <div className="mb-5">
          <label 
            htmlFor="username"
            className="mb-2 block uppercase text-gray-500 font-bold"
          >Nombre de usuario:</label>
          <input 
            type="text"
            id="username"
            name="username"
            placeholder="Nombre de Usuario"
            className="border p-3 w-full rounded-lg"
          />
        </div>
        
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
          <label 
            htmlFor="password_confirmation"
            className="mb-2 block uppercase text-gray-500 font-bold"
          >Repetir Contraseña:</label>
          <input 
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Repetir Contraseña"
            className="border p-3 w-full rounded-lg"
          />
        </div>

        <input
          type="submit" value="Crear Cuenta"
          className="bg-sky-600 hover:bg-sky-700 transition-colors cursor-pointer uppercase font-bold w-full p-3 text-white rounded-lg"
        />
      </form>
    </div>
  </div>
    </>
  )
}

export default Register