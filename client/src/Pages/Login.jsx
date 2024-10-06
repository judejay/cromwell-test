import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Store/userSlice";
import { navigate } from '@reach/router';

 const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user)

    const handleFormSubmission = (e) => {
        e.preventDefault()
        console.log(email, password)
        let userCredentials = {email, password}
        dispatch(loginUser(userCredentials))
        .then((response) => {
            console.log(response)
            if(response.payload.token) {
                setEmail('')
                setPassword('')
                navigate('/')
            }
        })

    }
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