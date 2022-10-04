import { Link } from "react-router-dom";
import login from "../assets/login.svg";
function Login() {
  return (
    <div>
      <img src={login} alt="" width="380px" height="380px" />
      <h2>Login</h2>
      <form>
        <label>
          <span>Email:</span>
          <input type="text" />
        </label>
        <label>
          <span>Password: </span>
          <input type="password" />
        </label>
        <button>Login Now</button>
        <br />
        <Link to="/signup">Not having an account?</Link>
      </form>
    </div>
  );
}
export default Login;
