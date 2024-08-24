export default function Login() {
  function handleSubmit() {}

  return (
    <div className="bg">
      <div className="login-panel">
        <form className="login-form">
          <input type="text" placeholder="Email" className="login-input" />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <input type="submit" className="btn submit" />
        </form>
      </div>
    </div>
  );
}
