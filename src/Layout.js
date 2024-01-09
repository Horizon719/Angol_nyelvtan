import "./App.css";
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <div>
            <header>Tanuljunk angolul!</header>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Választó</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/gepel">Egészítsd ki!</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/rendez">Rakd sorba!</Link>
                    </li>
                </ul>
            </nav>
            <article>
            {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
        </div>
    );
};

export default Layout;
