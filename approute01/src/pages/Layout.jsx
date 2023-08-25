import { Outlet } from "react-router-dom"
function Layout() {
    return (
        <div className="nav">
            <nav>
            <a class="nav-link" href="/"><strong className="negrita">Inicio</strong></a>
            <a class="nav-link" href="/about"><strong className="negrita">Conocenos</strong></a>
            <a class="nav-link" href="/services"><strong className="negrita">Servicios</strong></a>
            <a class="nav-link" href="/contact"><strong className="negrita">Contacto</strong></a>
            </nav>
            <Outlet />
        </div>
    );
}
export default Layout
