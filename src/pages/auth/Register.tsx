import { useForm } from 'react-hook-form'
import { VALIDATION_REGISTER } from '../../validations'
import Error from '../../components/common/Error'
import TitlePage from '../../components/common/TitlePage'
import ImageAuthPages from '../../components/common/ImageAuthPages'

type RegisterForm = {
  name: string
  username: string
  email: string
  password: string
  password_confirmation: string
}

const Register = () => {

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<RegisterForm>()

  const createAccount = (data: RegisterForm) => { 
    console.log(data)
  }

  return (
    <>
      <TitlePage titlePage={'Crear Cuenta'} />

      <div className="md:flex md:justify-center md:gap-10 md:items-center">

        <ImageAuthPages
          urlImg={'/img/registrar.jpg'}
          textAlt={'Imagen aluciva a registro de usuarios'}
        />

        <div className="md:w-4/12 bg-white p-6 rounded-lg shadow">
          <form 
            action="" 
            method="POST"
            noValidate
            onSubmit={handleSubmit(createAccount)}
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block uppercase text-gray-500 font-bold"
              >Nombre:</label>
              <input
                type="text"
                id="name"
                placeholder="Tu Nombre"
                className="border p-3 w-full rounded-lg @error"
                {...register('name', VALIDATION_REGISTER.name)}
              />
              { errors.name && ( <Error> {errors.name.message} </Error>) }
            </div>

            <div className="mb-5">
              <label
                htmlFor="username"
                className="mb-2 block uppercase text-gray-500 font-bold"
              >Nombre de usuario:</label>
              <input
                type="text"
                id="username"
                placeholder="Nombre de Usuario"
                className="border p-3 w-full rounded-lg"
                {...register('username', VALIDATION_REGISTER.username)}
              />
              { errors.username && (<Error> {errors.username.message} </Error>) }
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block uppercase text-gray-500 font-bold"
              >E-mail:</label>
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                className="border p-3 w-full rounded-lg"
                {...register('email', VALIDATION_REGISTER.email)}
              />
              { errors.email && ( <Error> {errors.email.message} </Error>) }
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-2 block uppercase text-gray-500 font-bold"
              >Contraseña:</label>
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                className="border p-3 w-full rounded-lg"
                {...register('password', VALIDATION_REGISTER.password)}
              />
              { errors.name && ( <Error> {errors.name.message} </Error>) }
            </div>

            <div className="mb-5">
              <label
                htmlFor="password_confirmation"
                className="mb-2 block uppercase text-gray-500 font-bold"
              >Repetir Contraseña:</label>
              <input
                type="password"
                id="password_confirmation"
                placeholder="Repetir Contraseña"
                className="border p-3 w-full rounded-lg"
                { ...register('password_confirmation')}
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