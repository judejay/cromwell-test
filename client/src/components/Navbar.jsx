import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const user = useSelector((state) => state.user);
  

  return (
    <nav>
      <ul>
        {currentPath !== "/" && (
          <Link to="/" className="btn btn-primary">
            HOME
          </Link>
        )}
        {!user && currentPath !== "/login" && (
          <Link to="/login" className="btn btn-primary">
            LOGIN
          </Link>
        )}
        {!user && currentPath !== "/register" && (
          <Link to="/register" className="btn btn-primary">
            REGISTER
          </Link>
        )}
        {user && currentPath !== "/dashboard" && (
          <Link to="/dashboard" className="btn btn-primary">
            DASHBOARD
          </Link>
        )}
        {user && currentPath !== "/logout" && (
          <Link to="/logout" className="btn btn-primary" 
          
          >
            LOGOUT
          </Link>
        )}
      </ul>
    
    </nav>
  );
};

export default Navbar;