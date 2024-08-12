import { Link } from 'react-router-dom'
import { URLS } from '../../constants'

const Nav = () => {
  return (
    <>
      {/* <nav className="flex gap-3 items-center">
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
      </nav> */}

      <nav className="flex gap-3 items-center">
        {
          URLS.map(({ id, url, label }) => {
            return (
              <Link
                key={id}
                to={url}
                className="font-bold uppercase text-gray-600 text-sm"
              >
                { label }
              </Link>
            )
          })
        }
      </nav>
    </>
  )
}

export default Nav