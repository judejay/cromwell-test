import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../Store/userSlice';






const Register = () => {
  const [userDetails, setUserDetails] = useState({ firstName:'', lastName: '', email: '', password: '', confirmPassword: '' });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userDetails));
  };

 


  return (
    <form className="form-group custom-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName" >FirstName</label>
        <input type="text" required name='firstName' value={userDetails.firstName} id="firstName" onChange={handleChange} className="form-control" />
        <label htmlFor="lastName">LastName</label>
        <input type="text" required id="lastName" name='lastName' value={userDetails.lastName}  onChange={handleChange} className="form-control" />
        <label htmlFor="email">Email</label>
        <input type="email"  
        name="email"
        value={userDetails.email}
        onChange={handleChange}
        placeholder="Email"
        required  id="email" className="form-control" 
        />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' required id="password" value={userDetails.password} onChange={handleChange} className="form-control" 
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name='confirmPassword' value={userDetails.confirmPassword} required id="confirmPassword"  onChange={handleChange} className="form-control" 
        />
        <button className='btn btn-primary' type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default Register