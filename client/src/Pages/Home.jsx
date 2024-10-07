import { Link } from "react-router-dom"

 const Home = () => {
  return (
    <>
    <Link to="/login" className="btn btn-primary">LOGIN</Link>
    <Link to="/register" className="btn btn-primary">REGISTER</Link>
    
    </>
  )
}

export default Home;
