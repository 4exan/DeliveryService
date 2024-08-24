export default function Login() {
  return (
    <div className="bg">
      <div className="registration-panel">
        <form className="registration-form">
          <input type="text" placeholder="First name" className="login-input" />
          <input
            type="text"
            placeholder="Middle name"
            className="login-input"
          />
          <input type="text" placeholder="Last name" className="login-input" />
          <input type="text" placeholder="Phone" className="login-input" />
          <input type="text" placeholder="Email" className="login-input" />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password again"
            className="login-input"
          />
          <input type="submit" className="btn submit" />
        </form>
      </div>
    </div>
  );
}
