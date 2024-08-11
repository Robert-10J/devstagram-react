import useDocumentTitle  from '../hooks/useDocumentTitle'

const Login = () => {
  useDocumentTitle('Iniciar Sesión')

  return (
    <>
      <h2 className="font-black text-center text-3xl mb-10">
        Titulo
      </h2>
    </>
  )
}

export default Login