import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
                <div className="container">
                    <NavLink className="navbar-brand d-md-none" to="#">
                        <svg className="bi" width={24} height={24}><use xlinkHref="#aperture" /></svg>
                        Aperture
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvas" aria-labelledby="offcanvasLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasLabel">Aperture</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav flex-grow-1 justify-content-between">
                                <li className="nav-item"><NavLink className="nav-link" to="#">
                                    <svg className="bi" width={24} height={24}><use xlinkHref="#aperture" /></svg>
                                </NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="#">Tour</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="#">Product</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="#">Features</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="#">Enterprise</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="#">Support</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="#">Pricing</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="#">
                                    <svg className="bi" width={24} height={24}><use xlinkHref="#cart" /></svg>
                                </NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Header
