export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Authentication App</h1>
      <p>Silakan login atau register untuk melanjutkan.</p>
      <div style={{ marginTop: "20px" }}>
        <a href="/auth/login" style={{ marginRight: "10px" }}>
          <button>Login</button>
        </a>
        <a href="/auth/register">
          <button>Register</button>
        </a>
      </div>
    </div>
  );
}
