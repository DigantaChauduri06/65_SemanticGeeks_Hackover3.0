function Signup() {
  return (
    <div>
      <form>
        <h2>Signup</h2>
        <label>
          <span>Email:</span>
          <input type="text" />
        </label>
        <label>
          <span>Password: </span>
          <input type="password" />
        </label>
        <label>
          <span>Confirm Password: </span>
          <input type="password" />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
export default Signup;
