// import { useNavigate } from "react-router-dom";
import logo from '../assets/login2.png'

interface FormLogin {
  email: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  onLogin: () => void;
}
export const FormLogin = ({ email, password, setUsername, setPassword, onLogin }:FormLogin) => {
  // const navigate = useNavigate();
  const handleClick = () => {
    // navigate()
  }
  return (
    <section className='login'>
    <img src={logo} className='imgLogin'/>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onLogin();
      }}
    >
      <section className="loginForm">
      <input
        className="username"
        type="text"
        placeholder="Username"
        value={email}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
      className='buttonLogin'
      type="submit" onClick={handleClick}>Login</button>
      </section>
    </form>
    </section>
  );
};
