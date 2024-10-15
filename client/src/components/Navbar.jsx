import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../Store/userSlice";
const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logging out");
    dispatch(logoutUser());
    navigate("/");
  };


  return (
    <nav>
      {user.user && <h1> Logged in {user.user.status} </h1>}
      <ul>
        {!user.user && currentPath !== "/" && (
          <Link to="/" className="btn btn-primary">
            HOME
          </Link>
        )}
        {!user.user && currentPath !== "/login" && (
          <Link to="/login" className="btn btn-primary">
            LOGIN
          </Link>
        )}
        {!user.user && currentPath !== "/register" && (
          <Link to="/register" className="btn btn-primary">
            REGISTER
          </Link>
        )}
        {user.user && currentPath !== "/dashboard" && (
          <Link to="/dashboard" className="btn btn-primary">
            DASHBOARD
          </Link>
        )}
        {user.user  && (
          <button className="btn btn-primary" 
          onClick={handleLogout}
          >
            LOGOUT
          </button>
        )}
      </ul>
    
    </nav>
  );
};

export default Navbar;