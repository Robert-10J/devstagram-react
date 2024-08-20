import { useForm } from 'react-hook-form'
import type { LoginForm } from '../../types'
import { VALIDATION_LOGIN } from '../../validations'
import Error from '../../components/common/Error'
import TitlePage from '../../components/common/TitlePage'
import ImageAuthPages from '../../components/common/ImageAuthPages'
import useSetDocumentTitle from '../../hooks/useSetDocumentTitle'
import axiosClient from '../../config/axiosClient'

const Login = () => {
  useSetDocumentTitle({
    title: 'Iniciar Sesión',
    preveailOnMount: true,
  })

  const { handleSubmit, register, formState: { errors } } = useForm<LoginForm>()

  const handleSubmitLogin = async (data: LoginForm) => {
    try {
      const response = await axiosClient('/register', data);
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <TitlePage titlePage={'Iniciar Sesión'} />

      <div className="md:flex md:justify-center md:gap-10 md:items-center">

        <ImageAuthPages
          urlImg={'/img/login.jpg'}
          textAlt={'Imagen aluciva a inicio de sesión'}
        />

        <div className="md:w-4/12 bg-white p-6 rounded-lg shadow">
          <form
            action=""
            method="POST"
            noValidate
            onSubmit={handleSubmit(handleSubmitLogin)}
          >
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
                {...register('email', VALIDATION_LOGIN.email) }
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
                { ...register('password', VALIDATION_LOGIN.password) }
              />
              { errors.password && ( <Error> {errors.password.message} </Error>) }
            </div>

            <div className="mb-5">
              <input
                type="checkbox"
                id="remember"
                { ...register('remember') }
              />
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