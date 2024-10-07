import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav>
      <ul>
        {currentPath !== "/" && (
          <Link to="/" className="btn btn-primary">HOME</Link>
        )}
        {currentPath !== "/login" && (
          <Link to="/login" className="btn btn-primary">LOGIN</Link>
        )}
        {currentPath !== "/register" && (
          <Link to="/register" className="btn btn-primary">REGISTER</Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;