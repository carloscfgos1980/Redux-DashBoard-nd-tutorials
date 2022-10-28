import { Link } from "react-router-dom";
import logo from './logo.png';

const NavBar = () => {
    return (
        <div className="container-fluid bg-dark py-3">
            <div className="row justify-content-between align-items-center">
                <div className="col-sm-3 text-center">
                    <img src={logo}
                        width="40%"
                        className="d-inline-block align-top"
                        alt="Logo" />
                </div>
                <div className="col-sm-3 text-center">
                    <h1 className="text-warning display-3">Student Dashboard</h1>
                </div>
                <div className="col-sm-5 text-center">
                    <nav className="navbar">
                        <div className="mx-5">
                            <Link className="m-1 btn btn-warning" to="/">Home</Link>
                            <Link className="m-1 btn btn-warning" to="/SingleStudent">Students Data</Link>
                            <Link className="m-1 btn btn-warning" to="/SliceDicingData">Slice & Dicing</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;