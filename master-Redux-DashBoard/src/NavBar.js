import { Link } from "react-router-dom";
import logo from './logo.jpg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" />
            <h1>Student Dashboard</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/SingleStudent">Students Data</Link>
                <Link to="/SliceDicingData">Slice & Dicing</Link>
            </div>
        </nav>
    );
}

export default Navbar;