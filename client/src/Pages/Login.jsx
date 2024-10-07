import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Store/userSlice";
import { useNavigate } from 'react-router-dom';

 const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user)
    const navigate = useNavigate();

    const handleFormSubmission = (e) => {
        e.preventDefault()
        console.log(email, password)
        let userCredentials = {email, password}
        dispatch(loginUser(userCredentials))
        .then((response) => {
            console.log("response", response)
            if(response.payload.token) {

try { 
              const token = response.payload?.token;

      if (token) {
        localStorage.setItem('token', token);
        setEmail('')
        setPassword('')
        navigate('/');
      } else {
        console.log('Login failed: Token not found in response');
      }
    } catch (err) {
      console.log('Login failed: ' + (err.response?.data?.message || err.message));
    }}
  })
  };
               
                

    
  return (
    <form className="form-group custom-form" onSubmit={handleFormSubmission}>
        <label htmlFor="email">Email</label>
        <input type="email" required id="email" className="form-control" 
        value = {email} onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input type="password" required id="password" className="form-control" 
        value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-success btn-md"> {loading? '..loading':'LOGIN' } </button>
        {error && <div className="alert alert-danger">{error}</div>}
    </form>
  )
}

export default Login;