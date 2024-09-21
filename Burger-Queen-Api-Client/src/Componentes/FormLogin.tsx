interface FormLogin {
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  onLogin: () => void;
}
export const FormLogin = ({ username, password, setUsername, setPassword, onLogin }:FormLogin) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onLogin();
      }}
    >
      <section className="loginSection">
      <input
        className="input-username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input-password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      </section>
    </form>
  );
};
