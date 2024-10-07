
const Register = () => {
  return (
    <form className="form-group custom-form">
        <label htmlFor="firstName">FirstName</label>
        <input type="text" required id="firstName" className="form-control" />
        <label htmlFor="lastName">LastName</label>
        <input type="text" required id="lastName" className="form-control" />
        <label htmlFor="email">Email</label>
        <input type="email" required id="email" className="form-control" 
        />
        <label htmlFor="password">Password</label>
        <input type="password" required id="password" className="form-control" 
        />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" required id="password" className="form-control" 
        />
        <button type="submit" className="btn btn-success btn-md">REGISTER</button>
    </form>
  )
}

export default Register