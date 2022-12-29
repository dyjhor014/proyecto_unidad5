import React, { Fragment } from 'react'
import logo from '../img/piton.png';

const Navbar = () => {
  return (
    <Fragment>
    {/* componente NAV */}
    <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <img src={logo} width="50px" height="50px"/>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-secondary">Inicio</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Añadir nuevo pago</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Buscar..." aria-label="Search" />
        </form>

        <div className="dropdown text-end">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
          </a>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href="#">Perfil</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  </Fragment>
  )
}

export default Navbar